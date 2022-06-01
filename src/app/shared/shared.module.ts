import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import {DropdownComponent} from "./components/dropDown/dropdown.component";
import {ClickOutsideDirective} from "./components/dropDown/click-outside.directive";



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
   PaginationModule.forRoot()
  ],
  exports:[
    PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    DropdownComponent,
    ClickOutsideDirective

  ]
})
export class SharedModule { }
