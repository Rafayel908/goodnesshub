import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {HelperService} from "../shop/helper/helper-service";



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  providers: [HelperService]
})
export class CoreModule { }
