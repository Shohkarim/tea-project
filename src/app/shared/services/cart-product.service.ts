import { Injectable } from '@angular/core';
import {ProductType} from "../../types/product-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartProductService {
  public products: ProductType[] = [];

  constructor(private http: HttpClient) { }


  getProducts(): Observable<ProductType[] >{

    return  this.http.get<ProductType[] >('https://testologia.ru/tea')

  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }
}
