import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from './../../Models/Product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  product: Product;
  productview = document.getElementById('ProdDetail');

  constructor(private productserice: ProductService) {}

  ngOnInit(): void {
    this.productserice.GetById(3).subscribe((a) => {
      this.product = a;
      console.log(a);
      this.productview.append(this.product.details);
    });
  }
}
