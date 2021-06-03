import { Product } from './../../../Models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss'],
})
export class ProductLayoutComponent implements OnInit {
  isList: boolean = false;
  products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

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
