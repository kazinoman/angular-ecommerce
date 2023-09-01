import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../type/products.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  BaseURL = 'https://api.escuelajs.co';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<IProducts[]>(this.BaseURL + '/api/v1/products').pipe(
      map((product) => {
        return product;
      })
    );
  }

  getProduct(productId: number) {
    return this.http.get<IProducts>(
      this.BaseURL + `/api/v1/products/${productId}`
    );
  }
}
