import {IProduct} from "./products";

export interface IType {
   id?: number,
   name?: string,
   created_at?: any,
   updated_at?: any,
   data:  IProduct[];

}
