import { Product } from './../../../Models/Product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
})
export class ProductLayoutComponent implements OnInit {
  isList: boolean = false;
  @Input('products') products: Product[] = [];

  constructor() {}

  ngOnInit() {
    console.log(this.products);
  }

  changeToList() {
    this.isList = true;
  }

  changeToGrid() {
    this.isList = false;
  }

  lowPriceSort() {
    this.products.sort((a, b) => {
      return a.price - b.price;
    });
  }

  hightRatedSort() {
    this.products.sort((a, b) => {
      return b.rate - a.rate;
    });
  }
}
