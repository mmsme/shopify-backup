import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-Search-page',
  templateUrl: './Search-page.component.html',
  styleUrls: ['./Search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  filteredDataUpdate(data: any) {
    console.log(data);

    this.products = data;
  }
}
