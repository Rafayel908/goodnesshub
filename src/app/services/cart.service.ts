import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
// import {Cart} from "../models/cart";
import {carttUrl} from "../config/api";
import {Goods} from "../models/goods";
import {Cart} from "../models/cart";
// import {Cart} from "../models/cart";
// import {carttUrl} from "../config/api";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  subject = new Subject<any>();
  cartDatalist: any = [];
  productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
    exists:any
 placeholder: any;
  constructor(private http: HttpClient) {
    const ls = localStorage.getItem('cart')
    if(ls) this.cartDatalist.next(ls)
  }

  //Get product Data
  getProductData() {
    return this.productList.asObservable()
  }

  //Set Product Data
  setProduct(product: any) {
    this.cartDatalist.push(...product)
    this.productList.next(product)
  }

  //Add to Cart
  // addToCart(item: any) {
  //    const ls = JSON.parse(localStorage.getItem('cart')||'{}');
  //   // let exists:Goods;
  //   if (ls)
  //     this.exists = ls.find((product:any)=>{
  //       return  product.id === item.id
  //     })
  //   // const exist = this.cartDatalist.find((item:any)=>{
  //   //       return  item.id === product.id
  //   // })
  //   if (this.exists){
  //     this.exists.qty++
  //     localStorage.setItem('cart',JSON.stringify(ls))
  //   }
  //   else  {
  //    if(ls){
  //      const newData = [...ls, item];
  //      localStorage.setItem('cart', JSON.stringify('cart'))
  //      this.cartDatalist.next(this.placeholder)
  //    }
  //   }
  // }
  addToCart(product: any) {
    this.cartDatalist.push(product)
    this.productList.next(this.cartDatalist);
    this.getTotalAmount()
    console.log("cardDataList====",this.cartDatalist);
  }

  //Get total amount
  getTotalAmount() {
    let grandTotal = 0;
    this.cartDatalist.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  //Remove Cart Data one by one
  removeCartData(product: any) {
    this.cartDatalist.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartDatalist.splice(index, 1)
      }

    })
    this.productList.next(this.cartDatalist)
  }

  //Remove all Cart Data
  removeAllCart() {
    this.cartDatalist = []
    this.productList.next(this.cartDatalist)
  }

  savtochekcout() {
    localStorage.setItem('cart', JSON.stringify(this.cartDatalist));
    this.subject.next('changed');
  }



  getShippingPrices() {
    let chekOutItems  = this.cartDatalist
    return chekOutItems;
  }
  // Get cart items
  //  getCartItems():Observable<Cart[]>{
  //    return this.http.get<Cart[]>(carttUrl)
  //
  //  }
}
