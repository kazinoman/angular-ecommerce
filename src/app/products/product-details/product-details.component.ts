import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProducts } from '../type/products.type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: { id: string };
  paramsSubscriptions: Subscription;
  productInfo: IProducts;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.product = {
      id: this.route.snapshot.params['id'],
    };
    this.paramsSubscriptions = this.route.params.subscribe((params: Params) => {
      this.product.id = params['id'];
    });
    this.getProduct();
  }

  getProduct() {
    this.productService
      .getProduct(parseInt(this.product.id))
      .subscribe((data: IProducts) => {
        this.productInfo = data;
        this.isLoading = false;
      });
  }
}
