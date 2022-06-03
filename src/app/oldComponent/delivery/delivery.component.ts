import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
export interface Delivery{
  id?:number;
  title?:string;
  price?:number;
  category?:number;
  quantity?: number;
  image?:any;
  rating?:any;
}
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {
  deliveryCosts: Delivery[] = [];
  constructor(private cartService:CartService) {


  }

  ngOnInit(): void {
    this.deliveryCosts = this.cartService.getShippingPrices()
    console.log("this Delivery====", this.deliveryCosts);
  }

}
