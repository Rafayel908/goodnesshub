import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {CartService} from "../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Goods} from "../../models/goods";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any;
  searchKey: string = "";
  filterCategory: any = ''
  allproducts: Goods[] = []

  constructor(private api: ApiService,
              private cartApi: CartService,
              private route: ActivatedRoute
  ) {
  }

   async ngOnInit() {
         this.api.getProductsData().subscribe((res) => {
           this.allproducts = res.data
           console.log("productList", res);

         })
    //
    // this.api.getProduct().subscribe(res => {
    //   this.productList = res;
    //   this.filterCategory = res
    //   this.productList.forEach((a: any) => {
    //     if (a.category === "women's clothing" || a.category === "men's clothing") {
    //       a.category = "fashion"
    //     }
    //     Object.assign(a, {quantity: 1, total: a.price})
    //   });
    //   console.log("ProductList===",  this.productList);
    // });
    // this.cartApi.search.subscribe((val: any) => {
    //   this.searchKey = val;
    // })


    this.route.params.subscribe(params=>{
      // if(params.searchTerm)
      //   this.productList = this.api.getProduct().filter()
    })

  }

  addtoCard(item: any) {
    this.cartApi.addToCart(item)

  }

  filter(category:string) {
    this.filterCategory = this.productList
      .filter((a:any)=>{
        if(a.category == category || category == ''){
          return a;
        }
      })
  }

}
