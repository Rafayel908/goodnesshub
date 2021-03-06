import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   products:any=[];
   allProducts:any=0;
  constructor(private cartApi:CartService) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res=>{
      this.products = res;
      this.allProducts = this.cartApi.getTotalAmount();
    })
    // this.invokeStripe()
  }
   removeProduct(item:any){
    this.cartApi.removeCartData(item);
   }
   removeAllProduct(){
    this.cartApi.removeAllCart();
   }
   checkout(amount:number){
      this.allProducts
   }
}
