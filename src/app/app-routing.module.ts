import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutPageComponent} from "./components/checkout-page/checkout-page.component";
import {DeliveryComponent} from "./components/delivery/delivery.component";

const routes: Routes = [
  {path: '',redirectTo: 'products', pathMatch:'full'},
  {path: 'products', component:ProductsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout-page',  component:CheckoutPageComponent},
  {path: 'search:/searchTerm', component:ProductsComponent},
  { path: 'delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
