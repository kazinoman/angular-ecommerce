import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { IProducts } from '../type/products.type';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
  providers: [ProductsService],
})
export class ProductsHomeComponent implements OnInit {
  products: IProducts[] = [];
  isLoading: boolean = true;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.products);
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((products: IProducts[]) => {
      if (products.length !== 0) {
        products?.forEach((data) => {
          this.products.push(data);
        });
        this.isLoading = false;
      }
    });
  }
}
