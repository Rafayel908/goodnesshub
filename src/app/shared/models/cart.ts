import {Goods} from "./goods";

export class Cart {
  id?:number;
  productId?:number;
  productTitle?: string;
  qty?:any;
  price?:number;
  constructor(id:number, product:Goods) {
    this.id =id;
    this.productId = product.id;
    this.productTitle =product.title;
    this.price =product.price;
    this.qty =product.quantity
  }
}
