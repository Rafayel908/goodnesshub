import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {CartapiService} from "../../services/cartapi.service";
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
              private cartApi: CartapiService,
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
      //   this.productList = this.api.getProduct().
    })
    console.log("ALLL", this.allproducts);
  }
  addtoCard(item:any){
    this.cartApi.addToCart(item)

  }

}
