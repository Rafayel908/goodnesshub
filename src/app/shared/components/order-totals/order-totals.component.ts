import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HelperService} from "../../../shop/helper/helper-service";
import {HttpClient} from "@angular/common/http";
export class itemUser {
   userId?: 123;
  products?: [1,5]
}

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  @Input() cartData: any
    cartTotals:any;
   cartTotal$: any
  private baseURL = 'http://185.217.127.162:8085/api/v1/orders/checkout';
  constructor(
              private cartService:HelperService,
              private http:HttpClient
              ) { }

  ngOnInit(): void {
    this.cartTotal$ =this.cartService.getCount()
     this.cartTotals = this.getTotalAmount()
    console.log('cartData ', this.cartData)

  }
  addPerson(key:itemUser): Observable<any> {
    const headers = { 'content-type': 'application/json', 'accept':'application/json'}
    const body=JSON.stringify(itemUser);
    console.log(body)
    return this.http.post(this.baseURL + body,{'headers':headers})
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.cartData?.map((a: any) => {
      grandTotal += (a.quantity? a.quantity * +a.price : +a.price);
    })
    return grandTotal;
  }
}
