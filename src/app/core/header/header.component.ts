import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {HelperService} from "../../shop/helper/helper-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItemNumber: number = 0;
  public searchTerm: string = '';
  basketCount: number = 0;
  constructor(private cartApi: CartService,
              private helperService: HelperService) {
  }

  ngOnInit(): void {
    if (!this.helperService.getCount()) {
      this.helperService.setCountToLocalStorage();
    }
    this.helperService.subject.subscribe((data) => {
      console.log(data,54)
      if (data || data === 0) {
        this.basketCount = data;
      }
    });
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
