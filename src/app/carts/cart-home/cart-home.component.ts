import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { IProducts } from 'src/app/products/type/products.type';
import { ICarts } from '../type/cart.type';

@Component({
  selector: 'app-cart-home',
  templateUrl: './cart-home.component.html',
  styleUrls: ['./cart-home.component.css'],
})
export class CartHomeComponent {
  constructor(private cartService: CartService) {}

  productList: ICarts[] = this.cartService.carts;

  ngOnInit() {
    console.log(this.productList);
  }
}
