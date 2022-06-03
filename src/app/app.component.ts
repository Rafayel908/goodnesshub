import {Component, OnInit} from '@angular/core';
import {HelperService} from "./shop/helper/helper-service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HelperService]
})
export class AppComponent implements OnInit {
  title = 'TopFashion';

  constructor(
    private helperService: HelperService
  ) {

  }

  ngOnInit() {
    if (!this.helperService.getProducts()) {
      this.helperService.setDataToLocalStorage();
    }
  }
}
