import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-vertical',
  templateUrl: './product-card-vertical.component.html',
  styleUrls: ['./product-card-vertical.component.scss'],
})
export class ProductCardVerticalComponent implements OnInit {
  @Input('product-name') name: string = 'title Demo';
  @Input('details') details: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';

  @Input('image') image: string = '';
  @Input('sale') sale: boolean = false;
  @Input('rate') rate: number = 0;
  @Input('number-of-rate') numberOfRate: number = 0;
  @Input('price') price: number = 0;

  constructor() {}

  ngOnInit() {
    console.log(this.price)
  }
}
