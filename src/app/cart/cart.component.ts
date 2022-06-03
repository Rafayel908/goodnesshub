import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ICart} from "../shared/models/cart";
import {HelperService} from "../shop/helper/helper-service";
import {IProduct} from "../shared/models/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: any[] = [];
  cartTotal$: any
  constructor(private helperService:HelperService) { }

  ngOnInit(): void {
    this.cart$ =this.helperService.getProducts()
    console.log("CART$",this.cart$);
    this.cartTotal$ =this.getTotalAmount()
    // this.incrementItem("")


  }

  getTotalAmount() {
    let grandTotal = 0;
    this.cart$.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  // incrementItem(item:any){
  //   const cart = this.cartTotal$;
  //   const foundItemIndex = cart.items.findIndex((x:any)=> x.id === item.id)
  //   cart.items[foundItemIndex].quantity++
  //   console.log("this fountItemIndex===", foundItemIndex)
  //   this.addToBasket(cart)
  // }
  decrementItem(item:any){
    const cart = this.cartTotal$;
    const foundItemIndex = cart.items.findIndex((x:any)=> x.id === item.id)
   if(cart.items[foundItemIndex].quantity>1){
     cart.items[foundItemIndex].quantity--
   } else{
      this.removeFromCart(cart)
   }
    this.addToBasket(cart)
  }

  removeFromCart(product:any){
    const cartItems = this.cart$
    if(cartItems.length>0){
      localStorage.removeItem("id")
    }else{
      // deleteCart(cartItems)
    }
  }

  // deleteCart(cart:any){
  //   return
  // }
  addToBasket(product: any) {
    // @ts-ignore
    let item = JSON.parse(localStorage.getItem('products'));
    let count = 0;
    if (item.length !== 0) {
      item.forEach((el: IProduct) => {
        if (el.id !== product.id) {
          count = JSON.parse(this.helperService.getCount());
          count++;
          item.push(product);
          this.helperService.subject.next(count);
        }
      })
    } else {
      item.push(product);
      count = JSON.parse(this.helperService.getCount());
      count++;
      this.helperService.subject.next(count);
    }
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('products', JSON.stringify(item));

  }

}
