import {BehaviorSubject, Subject} from "rxjs";

export class HelperService {
  subject = new BehaviorSubject(this.getCount());
  productItems= new BehaviorSubject(this.getProducts())

  constructor() {
  }
     removProductItem(){
    localStorage.removeItem('products')
     }
  setDataToLocalStorage() {
    localStorage.setItem('products', JSON.stringify([]));
  }

  getProducts() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('products') ? localStorage.getItem('products') : false);
  }

  getCount() {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('count') ? localStorage.getItem('count') : false);
  }

  setCountToLocalStorage() {
    localStorage.setItem('count', JSON.stringify(0));
  }
}
