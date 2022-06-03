import { Component, OnInit } from '@angular/core';
import {HelperService} from "../shop/helper/helper-service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {itemUser} from "../shared/components/order-totals/order-totals.component";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  getIds =[]
  private cartTotal$: any;
  private cart$ = [] ;
  private baseURL = 'http://185.217.127.162:8085/api/v1/orders/checkout';
  public person:any;
  constructor(private  helperService:HelperService,
              private http:HttpClient) { this.person=itemUser}

  ngOnInit(): void {
    this.cartTotal$ =this.getTotalAmount()
    this.cart$ =this.helperService.getProducts()
    console.log(this.cart$, "CART$");
    console.log(this.getId(this.cart$))
    // this.addPerson(new Person).subscribe(person => this.Person.push(person))
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.cart$.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
        getId(carts:any){
           for(let cart of this.cart$){
             this.getIds.push(cart['id'])
           }
           return this.getIds

        }
  addPerson() {
    const headers = { 'content-type': 'application/json', 'accept':'application/json'}
    // const body=JSON.stringify(event.target.value.target);
    console.log("postBODY")
     this.http.post(this.baseURL,{userId: "123",products:this.getIds}, {'headers':headers})
       .subscribe(res =>console.log(res))
  }
}
