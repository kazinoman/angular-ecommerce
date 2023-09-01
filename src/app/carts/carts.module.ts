import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartsRoutingModule } from './carts-routing.module';
import { CartHomeComponent } from './cart-home/cart-home.component';

@NgModule({
  declarations: [CartHomeComponent],
  imports: [CommonModule, CartsRoutingModule],
  exports: [],
})
export class CartsModule {}
