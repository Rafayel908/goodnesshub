import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ICart} from "../shared/models/cart";
// import {BehaviorSubject} from "rxjs";
// import {ICart} from "../shared/models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private cartSource = new BehaviorSubject<ICart>(null) ;
  // cart$ = this.cartSource.asObservable()
    items:any;
 local_storage:any;
  itemsInCart = []
  constructor() {

  }


}
