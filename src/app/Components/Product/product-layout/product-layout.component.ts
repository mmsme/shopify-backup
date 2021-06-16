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

  ngOnInit() {}

  changeToList() {
    this.isList = true;
  }

  changeToGrid() {
    this.isList = false;
  }

  lowPriceSort() {
    this.products.sort((a, b) => {
      return a.Price - b.Price;
    });
  }

  hightRatedSort() {
    this.products.sort((a, b) => {
      return b.Rate - a.Rate;
    });
  }
}
