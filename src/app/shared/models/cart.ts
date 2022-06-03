import {v4, v4 as uuidv4} from 'uuid'
export interface ICartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rate: number;
  quantity:number;
  created_at: any;
  updated_at: any;
  image:any;
  // links:any;
  category_id: number;

}
 export interface ICart {
     id:string;
     items: ICartItem[];

 }
 export class Cart implements  ICart{
   id = uuidv4();
   items!: ICartItem[];

 }
