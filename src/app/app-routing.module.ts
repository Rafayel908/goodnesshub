import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./oldComponent/products/products.component";
import {CartComponent} from "./oldComponent/cart/cart.component";
import {CheckoutPageComponent} from "./oldComponent/checkout-page/checkout-page.component";
import {DeliveryComponent} from "./oldComponent/delivery/delivery.component";
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {ProductDetailsComponent} from "./shop/product-details/product-details.component";

const routes: Routes = [
  {path: '',component:ShopComponent},
  {path: 'shop',loadChildren:() =>import('./shop/shop.module').then(mod =>mod.ShopModule)},
  {path: 'cart',loadChildren:() =>import('./cart/cart.module').then(mod =>mod.CartModule)},
  {path: 'checkout',loadChildren:() =>import('./checkout/checkout.module').then(mod =>mod.CheckoutModule)},
  {path: '**', redirectTo:'',pathMatch:'full'},
  // {path: 'cart', component:CartComponent},
  // {path: 'checkout-page',  component:CheckoutPageComponent},
  // {path: 'search:/searchTerm', component:ProductsComponent},
  // { path: 'delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
