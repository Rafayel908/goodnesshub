import { Injectable } from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl =  'http://185.217.127.162:8085/api/v1/products/purchase'

  postClient(client: {'id':number,'name': string}): Observable<any> {
    return this.http.post<any>(this.baseUrl, client,)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }
  constructor(private http:HttpClient) { }
}
