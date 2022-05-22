import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {CartapiService} from "../../services/cartapi.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    productList:any;
  constructor(private api:ApiService,
              private cartApi: CartapiService
  ) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList =res;
      this.productList.forEach((a:any )=>{
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
    console.log("product-list===", this.productList);
  }
  addtoCard(item:any){
    this.cartApi.addToCart(item)

  }

}
