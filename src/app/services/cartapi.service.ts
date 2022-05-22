import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
   cartDatalist:any=[];
   productList =new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) {  }
  //Get product Data
  getProductData(){
      return this.productList.asObservable()
    }
    //Set Product Data
    setProduct(product:any){
      this.cartDatalist.push(...product)
      this.productList.next(product)
    }
    //Add to Cart
    addToCart(product:any){
    this.cartDatalist.push(product)
    this.productList.next(this.cartDatalist);
    this.getTotalAmount()
      console.log(this.cartDatalist);
    }
  //Get total amount
  getTotalAmount(){
     let grandTotal =0;
     this.cartDatalist.map((a:any)=>{
      grandTotal+= a.total;
    })
    return grandTotal;
  }
   //Remove Cart Data one by one
   removeCartData(product:any){
    this.cartDatalist.map((a:any, index:any)=>{
      if(product.id ===a.id){
        this.cartDatalist.splice(index,1)
      }

    })
     this.productList.next(this.cartDatalist)
   }
   //Remove all Cart Data
   removeAllCart(){
    this.cartDatalist= []
     this.productList.next(this.cartDatalist)
   }
}
