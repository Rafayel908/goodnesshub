import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})
export class PagingHeaderComponent implements OnInit {
   @Input() meta!: any;
   // @Input() pageSize!: number;
   // @Input() totalCount!: number;
  constructor() { }

  ngOnInit(): void {
    // console.log(77777777777)
    // console.log('pageNumber = ', this.pageNumber)
    // console.log('pageSize = ', this.pageSize)
    // console.log('totalCount = ', this.totalCount)
  }

}
