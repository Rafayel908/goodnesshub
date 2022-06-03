import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import {CartRoutingModule} from "./cart-routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    CartComponent,


  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    NgbRatingModule
  ]
})
export class CartModule { }
