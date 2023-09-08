import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdditionService } from '../service/addition.service';

@Component({
  selector: 'app-addition-home',
  templateUrl: './addition-home.component.html',
  styleUrls: ['./addition-home.component.css'],
})
export class AdditionHomeComponent implements OnInit {
  category: { id: number; name: string }[] = [];

  productForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    categoryId: new FormControl(''),
    description: new FormControl(''),
  });

  // userForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   category: new FormControl(''),
  //   description: new FormControl(''),
  // });

  constructor(private additionService: AdditionService) {}

  ngOnInit(): void {
    this.additionService.getCategories().subscribe((data) => {
      this.category = data;
    });
  }

  handleProductForm() {
    console.warn(this.productForm.value);
    this.additionService
      .createNewProduct(this.productForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
