import { Component, Input } from '@angular/core';
import { ICategory } from 'src/app/products/type/products.type';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() name: string;
  @Input() images: string[] = [];
  @Input() description: string;
  @Input() price: number = 0;
  @Input() id: number = 0;
  @Input() category: ICategory;
  @Input() creationAt: Date;
  @Input() updateAt: Date;

  constructor(private cartService: CartService) {}

  ngOnChange() {}

  removeItem(id: number) {
    this.cartService.removeFromCarts(id);
    this.cartService.cartUpdate.emit(this.cartService.carts.length);
  }
}
