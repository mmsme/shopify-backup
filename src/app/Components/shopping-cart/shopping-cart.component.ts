import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products: any;
  totalPrice: number = 0;
  isEmpty: boolean = false;
  constructor() {
    this.products = [];
  }

  ngOnInit(): void {}
}
