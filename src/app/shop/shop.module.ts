import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {ShopRoutingModule} from "./shop-routing.module";
import {HelperService} from "./helper/helper-service";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    NgbRatingModule,
    SharedModule,
    FormsModule,
    ShopRoutingModule
  ],
})
export class ShopModule { }
