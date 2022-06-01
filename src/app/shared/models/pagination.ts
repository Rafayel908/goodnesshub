import {IProduct} from "./products";


export interface IPagination {
  data?:  IProduct[];
  links?: any;
  meta?:  any;
}


