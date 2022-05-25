import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {CartApiService} from "../../services/cartApi.service";
import {ActivatedRoute} from "@angular/router";
import {Goods} from "../../models/goods";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    productList:any;
    allproducts:Goods[]=[]
  constructor(private api:ApiService,
              private cartApi: CartApiService,
              private route:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.api.getProduct().subscribe(res=>{
      this.productList =res;
      this.allproducts.push =res
      this.productList.forEach((a:any )=>{
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
    console.log("product-list===", this.productList);

    this.route.params.subscribe(params=>{
      // if(params.searchTerm)
      //   this.productList = this.api.getProduct().filter()
    })

  }
  addtoCard(item:any){
    this.cartApi.addToCart(item)

  }

}
