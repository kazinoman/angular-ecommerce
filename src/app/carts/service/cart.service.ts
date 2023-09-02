import { Injectable, EventEmitter } from '@angular/core';
import { ICarts } from '../type/cart.type';
import { productExistsInArray } from '../utils/checkCart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carts: ICarts[] = [];
  cartUpdate = new EventEmitter<number>();

  constructor() {}

  addtoCarts(product: ICarts): boolean {
    if (!productExistsInArray(this.carts, product.id)) {
      this.carts.push(product);
      return true;
    } else {
      return false;
    }
  }

  removeFromCarts(productID: number) {
    const pr = this.carts.filter((product) => product.id !== productID);
    this.carts = pr;
  }
}
