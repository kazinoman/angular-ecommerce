import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/carts/service/cart.service';
import { ICategory } from '../type/products.type';

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
  @Input() category: ICategory;
  @Input() creationAt: Date;
  @Input() updateAt: Date;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
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
  }

  addToCart() {
    this.cartService.addtoCarts({
      title: this.name,
      description: this.description,
      category: {
        name: this.category.name,
        id: this.category.id,
        image: this.category.image,
      },
      price: this.price,
      id: this.id,
      images: this.images,
      creationAt: this.creationAt,
      updatedAt: this.updateAt,
    });
    this.cartService.cartUpdate.emit(this.cartService.carts.length);
  }

  ngOnDestroy(): void {
    this.paramsSubscriptions.unsubscribe();
  }
}
