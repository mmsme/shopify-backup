import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('product-name') title: string = 'demo title';
  @Input('product-info') info: string = 'demo info about the product';
  @Input('price') price: number = 0;
  @Input('img') image: string = '';
  @Input('rate') rate: number = 0;
  @Input('sale') sale: boolean = false;

  constructor() {}

  ngOnInit() {}
}
