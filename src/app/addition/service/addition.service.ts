import { Injectable } from '@angular/core';
import { ICreateProduct } from '../addition-home/type/product.type';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdditionService {
  BaseURL = 'https://api.escuelajs.co';

  constructor(private http: HttpClient) {}

  createNewProduct(productDetails: Partial<ICreateProduct>) {
    console.log(productDetails);
    return this.http.post(this.BaseURL + '/api/v1/products', productDetails);
  }

  getCategories() {
    return this.http
      .get<{ name: string }[]>(this.BaseURL + '/api/v1/categories')
      .pipe(
        map((resData: any) => {
          let ids: { id: number; name: string }[] = [];
          for (let key in resData) {
            ids.push({
              name: resData[parseInt(key)].name,
              id: resData[parseInt(key)].id,
            });
          }
          return ids;
        })
      );
  }
}
