import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products: Product[];
  totalPrice: number = 0;
  bill: any[] = [];

  @Output('total-price') total = new EventEmitter();

  constructor(private prodServ: ProductService) {}

  ngOnInit() {
    this.prodServ.getTopSales().subscribe((data) => {
      this.products = data;
      this.generateBill();
      console.log(this.bill);
      console.log(this.totalPrice);
    });
  }

  generateBill() {
    this.products.forEach((p) => {
      this.bill.push({
        id: p.productId,
        name: p.productName,
        price: p.price,
        quantity: 1,
      });
    });

    this.calcTotalPrice();
  }

  updateBill(product: any, quantity: number) {
    const _prod = this.bill.find((p) => p.id == product);
    _prod.quantity = quantity;

    console.log(this.bill);

    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.totalPrice = 0;
    this.bill.forEach((p) => {
      this.totalPrice += p.price * p.quantity;
    });

    this.total.emit(this.totalPrice);
  }

  deleteFromCart(event) {
    const index = this.products.findIndex((p) => p.productId == event);
    this.products.splice(index, 1);
    this.bill = [];
    this.generateBill();
  }
}
