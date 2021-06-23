import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _productServices: ProductService) {}

  ngOnInit() {}
}
