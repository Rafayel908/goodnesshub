import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IProduct} from "../shared/models/products";
import {ShopService} from "./shop.service";
import {IBrand} from "../shared/models/brand";
import {IType} from "../shared/models/productTypes";
import {Observable, pipe} from "rxjs";
import {IPagination} from "../shared/models/pagination";
import {ShopParams} from "../shared/models/shopParams";
import {DropdownModel} from "../shared/components/dropDown/select";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // @ViewChild('search', {static:true}) searchTerm:ElementRef
  search = '';
  categoryName: any;
  products: IProduct[] | undefined=[] ;
  brands!: IBrand[] ;
  types: DropdownModel[] | undefined=[] ;
  categoriesList: DropdownModel<number | undefined>[] = [];
   shopParams = new ShopParams()
  totalCoount: number = 0;
  sortOptions = [
    {name:'Alphabetical',value:'name'},
    { name:'Price: Low to High', value: 'priceAsc'},
    { name:'Price: High to Low', value: 'priceDesc'},
  ];

  constructor(private shopService:ShopService) {

  }

  ngOnInit(): void {
        this.getProducts()
        this.getTypes()
  }
  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe(response =>{

      this.products = response!.data;
       this.shopParams.pageNumber =response?.links
      this.shopParams.pageSize=response?.links
      this.totalCoount = response?.meta.total
      console.log('this.totalCoount ', this.totalCoount)
      console.log("this products shop", this.products)
    }, error =>{
      console.log(error)
    })
  }
  // getBrands(){
  //   this.shopService.getBrands().subscribe(response=>{
  //     this.brands = response
  //   }, error => {
  //     console.log(error)
  //   })
  // }
  getTypes(){
    this.shopService.getTypes().subscribe(response=>{
      this.categoriesList = response.data.map(x => new DropdownModel(`${x.name} `, x.id));

    }, error => {
      console.log(error)
      console.log("typesSHOP==", this.types)
    })

  }
  // onCategoriesSelected(typeId:number){
  //   this.shopParams.typeId = typeId
  //   console.log("categoriesID==", typeId)
  //   this.getProducts()
  // }
  onSortSelected(sort: any){
    console.log("sort", sort)
    this.shopParams.sort = sort
    this.getProducts()
  }
  selectCategories(category:number){
    this.products  = this.products?.filter((el)=>{
      return el.category_id === category
    });


  }
  onPageChanged(event: any) {
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber =event
      this.getProducts()
    }

    console.log("E",event)
  }
  onSearch(){
    this.shopParams.search = this.search;
    this.getProducts()
  }
  onReset(){
    this.search = '';
    this.shopParams = new ShopParams();
    this.categoryName = null;
    this.getProducts()

  }
}
