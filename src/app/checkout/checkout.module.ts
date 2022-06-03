import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import {CheckoutRoutingModule} from "./checkout-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CheckoutModule { }