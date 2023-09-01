import { ProductsService } from './../services/products.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product: { id: string };
  paramsSubscriptions: Subscription;
  @Input() name;
  @Input() images: string[] = [];
  @Input() description: string;
  @Input() price: number = 0;
  @Input() id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
    this.name = '';
    this.images = [];
  }

  ngOnInit() {
    this.product = {
      id: this.route.snapshot.params['id'],
    };
    this.paramsSubscriptions = this.route.params.subscribe((params: Params) => {
      this.product.id = params['id'];
    });
    console.log(this.images[0], this.price);
  }

  ngOnChange() {
    console.log(this.images, this.price);
  }

  productDetais() {}

  getProduct() {
    this.productService.getProduct(this.id).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscriptions.unsubscribe();
  }
}
