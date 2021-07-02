import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-ShoppingCart',
  templateUrl: './ShoppingCart.component.html',
  styleUrls: ['./ShoppingCart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  products: Product[];
  totalPrice: number = 0;
  bill: any[] = [];
  isLoading: boolean = true;
  cartItem: any;
  cart: any;
  stars = [1, 2, 3, 4, 5];
  isEmpty: boolean = false;

  @Output('total-price') total = new EventEmitter();

  constructor(private prodServ: ProductService, private Service: FormsService) {
    this.cartItem = [];
  }

  ngOnInit(): void {
    this.Service.GetCartItems().subscribe((a) => {
      console.log('cart', a);
      this.cart = a;
      this.cartItem = a.cartItems;
      this.isLoading = false;
    });
  }

  generateBill() {
    this.products.forEach((p) => {
      this.bill.push({
        id: p.productId,
        name: p.productName,
        price: p.price - (p.discount / 100) * p.price,
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

  delete(productId: any) {
    this.Service.DeleteCartItem(productId).subscribe((a) => {
      alert('Deleted');
      this.ngOnInit();
    });
  }

  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */

  Fav(productId: any) {
    this.Service.AddCartItemsTOFav(productId).subscribe((a) => {
      alert('Added');
      this.ngOnInit();
    });
  }

  plus(Quentity: any, cartItemId: any, productId: any) {
    console.log(this.cartItem[cartItemId].quantity);
    if (
      this.cartItem[cartItemId].quantity <
      this.cartItem[cartItemId].product.inventoryProducts[0].quantity
    ) {
      Quentity++;
      console.log(Quentity);
      this.Service.EditCartItems(Quentity, productId).subscribe((a) => {
        alert('your Cart Data Updated Successfuly');
        this.ngOnInit();
      });
    }
  }

  min(quentity: any, cartItemId: any, productId: any) {
    console.log(this.cartItem[cartItemId].quantity);
    if (this.cartItem[cartItemId].quantity > 1) {
      quentity--;
      console.log(quentity);
      this.Service.EditCartItems(quentity, productId).subscribe((a) => {
        alert('your Cart Data Updated Successfuly');
        this.ngOnInit();
      });
    }
  }
}
