import { Component } from '@angular/core';
import { CartService } from 'src/app/carts/service/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  cartItem: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.addInCart();
    this.cartService.cartUpdate.subscribe((data) => {
      this.cartItem = data;
    });
  }

  ngOnChange() {
    this.addInCart();
  }

  addInCart() {
    this.cartItem = this.cartService.carts.length;
    console.log(this.cartService.carts.length);
  }
}
