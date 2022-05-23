import {Component, OnInit} from '@angular/core';
import {Goods} from "../../models/goods";
import {FormGroup, FormBuilder} from "@angular/forms";
import {CartapiService} from "../../services/cartapi.service";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  order: Goods = new Goods()
  checkoutForm!: FormGroup;

  constructor(cartServices: CartapiService,
              private formsBuilder: FormBuilder,
              // private userService:UserService;

) {
}

ngOnInit()
:
void {}

}
