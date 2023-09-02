import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CartsRoutingModule } from './carts-routing.module';
import { CartHomeComponent } from './cart-home/cart-home.component';
import { CartService } from './service/cart.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [CartHomeComponent, CartComponent],
  imports: [CommonModule, CartsRoutingModule, NzButtonModule],
  exports: [],
})
export class CartsModule {}
