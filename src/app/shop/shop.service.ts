import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IPagination} from "../shared/models/pagination";
import {IType} from "../shared/models/productTypes";
import {IBrand} from "../shared/models/brand";
import {delay, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ShopParams} from "../shared/models/shopParams";
import {IProduct} from "../shared/models/products";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://185.217.127.162:8085/api/v1/'
  id!: number | null | undefined ;

  constructor(private http: HttpClient) {
  }
    getProduct(id:number){
      return this.http.get<IProduct>(this.baseUrl + 'products/'+ id)
      console.log("this......",this.http)
    }
  getProducts(shopParams:ShopParams) {
    let params = new HttpParams();
    if(shopParams.typeId !== 0){
      params = params.append('categoriesId', shopParams.typeId.toString());
    }
    if(shopParams.search){
      params =  params.append('search', shopParams.search)

    }
      params = params.append('sort', shopParams.sort)
      params = params.append('pageIndex',shopParams.pageNumber.toString());
      params = params.append('pageIndex',shopParams.pageNumber.toString());
    return this.http.get<IPagination>(this.baseUrl + 'products',{observe:'response',params})
      .pipe(
        // delay(1000),
        map(response =>{
          console.log('response , ****** ', response)
          return response.body})
      );
  }

  //      getBrands(){
  //     return this.http.get<IType[]>(this.baseUrl+'products/brands')
  //      }

  getTypes() :Observable<IType>{
    return this.http.get<IType>(this.baseUrl + 'categories')

  }
}
