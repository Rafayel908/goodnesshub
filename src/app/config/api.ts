import {environment} from "../../environments/environment";

export const baseUrl =environment.production ? 'https://api.shoppingcart.com' : 'http://localhost'
export const productsUrl = baseUrl + '/products'
export const carttUrl = baseUrl + '/cart'
