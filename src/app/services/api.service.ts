import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {productsUrl} from "../config/api";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import { Location } from '@angular/common';
import {Goods} from "../shared/models/goods";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiData:any;
  products: Goods[] | undefined;
  constructor(private http: HttpClient
             ) { }

  // getProduct(){
  //   return this.http.get("https://fakestoreapi.com/products").pipe(map((res:any)=>{
  //        return res;
  //   }))
  // }

  getProductsData():Observable<any> {
    const url = Location.joinWithSlash(
      environment.apiUrl || '', `api/v1/products?page=10`
    );
    // return this.apiData.get(url,data);
    return this.http.get("http://127.0.0.1:8085/api/v1/products?page=50").pipe(map((res:any)=>{
      console.log('res ', res)
      return res
    }))
    // console.log("apiData==", this.products)

  }
}
//    getPRoducts(): Observable<Product[]>{
//   return this http.get<Product[]> (productsUrl)
// }
