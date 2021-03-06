import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './oldComponent/products/products.component';
import { CartComponent } from './oldComponent/cart/cart.component';
import { FooterComponent } from './oldComponent/footer/footer.component';
import { HttpClientModule} from "@angular/common/http";
// import { CheckoutPageComponent } from './oldComponent/checkout-page/checkout-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './shared/filter.pipe';
import {SlickCarouselModule} from "ngx-slick-carousel";
// import { DeliveryComponent } from './oldComponent/delivery/delivery.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {ShopModule} from "./shop/shop.module";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    FooterComponent,
    FilterPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
