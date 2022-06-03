import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../shared/models/products";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";
import {HelperService} from "../helper/helper-service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 product!: IProduct  ;
  constructor(private shopService:ShopService,
              private activateRoutes:ActivatedRoute,
              private helperService:HelperService
              ) { }

  ngOnInit(): void {
   this.loadProduct()

  }
  loadProduct(){

    // @ts-ignore
    this.shopService.getProduct(+this.activateRoutes.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product.data
     console.log(this.product)
   }, error => {
     console.log(error)
   })
  }
  addToBasket(product: IProduct) {
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
