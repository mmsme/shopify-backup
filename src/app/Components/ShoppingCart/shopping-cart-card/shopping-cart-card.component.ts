import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.scss'],
})
export class ShoppingCartCardComponent implements OnInit {
  @Input('id') id: any;
  @Input('image') image: string;
  @Input('productName') title: string = 'Product Title';
  @Input('rate') rate: number = 4;
  @Input('description') info: string = 'Dummy description';

  @Input('price') price: number = 15;

  count: number = 1;
  @Input('maxOrder') maxOrderCount: number;
  @Output('quantity') quantity = new EventEmitter();
  @Output('delete') deleteProduct = new EventEmitter();
  like: boolean = false;

  constructor() {}
  ngOnInit() {}

  increaseCount() {
    if (this.count < 50) {
      this.count++;
    }

    this.quantity.emit(this.count);
  }

  decreaseCount() {
    if (this.count > 1) {
      this.count--;
    }
    this.quantity.emit(this.count);
  }

  delete() {
    this.deleteProduct.emit(this.id);
  }
}
