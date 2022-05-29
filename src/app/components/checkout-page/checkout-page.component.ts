import {Component, OnInit} from '@angular/core';
import {Goods} from "../../models/goods";
import {FormGroup, FormBuilder} from "@angular/forms";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
// import {Cart} from "../../models/cart";

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  order = new Goods()
  checkoutForm!: FormGroup;
  paymentHandler: any = null;
  chekOutedGoods: Goods[] = []

  constructor(cartServices: CartService,
              private formsBuilder: FormBuilder,
              private router: Router,
              private cartService:CartService

              // private userService:UserService;

  ) {    }


  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L2VoWLpA89XMQOgAxOeJH3eqmNf1PS87qVnRSqtCxrdCQ2JYp4zWWTsB0tKnLr5jnRDMQt8xyEPBkgXLgyLNwXJ009N6xLaFI',
      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken);
        // alert('Stripe token generated!');
        this.router.navigate(['/delivery'])
      },
    });

    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  ngOnInit(): void {
    this.chekOutedGoods = this.cartService.getShippingPrices()
    console.log("this Delivery====", this.chekOutedGoods);
    this.invokeStripe();
  }
}
