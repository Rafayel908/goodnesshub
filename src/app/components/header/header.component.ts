import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItemNumber: number = 0;
  public searchTerm: string = '';

  constructor(private cartApi: CartService) {
  }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;
    })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log("SearchTerm====", this.searchTerm)
    this.cartApi.search.next(this.searchTerm);
  }
}
