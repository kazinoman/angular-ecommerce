import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ButtonModule } from 'primeng/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from './services/products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from '../carts/service/cart.service';

@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProgressSpinnerModule,
    NzSpinModule,
    NzImageModule,
    ButtonModule,
    NzButtonModule,
    NzGridModule,
    NzSkeletonModule,
    NzTagModule,
  ],

  exports: [],
  providers: [ProductsService],
})
export class ProductsModule {}
