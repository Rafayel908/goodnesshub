import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../shared/models/products";
import {HelperService} from "../helper/helper-service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  productsList: IProduct[] = [];

  constructor(
    private helperService: HelperService,
  ) {

  }

  ngOnInit(): void {
  }

  addToBasket(product: IProduct) {
    // @ts-ignore
    let item = JSON.parse(localStorage.getItem('products'));
    let count = 0;
    if (item.length !== 0) {
      item.forEach((el: IProduct) => {
        if (el.id !== product.id) {
          count = JSON.parse(this.helperService.getCount());
          count++;
          item.push(product);
          this.helperService.subject.next(count);
        }
      })
    } else {
      item.push(product);
      count = JSON.parse(this.helperService.getCount());
      count++;
      this.helperService.subject.next(count);
    }
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('products', JSON.stringify(item));

  }

}
