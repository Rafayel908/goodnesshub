import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPagination} from "./models/pagination";
import {IProduct} from "./models/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'TopFashion';
  products: IProduct[] | undefined=[];
                constructor(private http:HttpClient) {

                }
  ngOnInit (){
    return this.http.get("http://127.0.0.1:8085/api/v1/products").subscribe((res:IPagination)=>{
      console.log('result ', res)
      this.products = res.data
  }  )
}
}
