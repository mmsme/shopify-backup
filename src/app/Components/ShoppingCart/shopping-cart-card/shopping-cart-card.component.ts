import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-shopping-cart-card',
  templateUrl: './shopping-cart-card.component.html',
  styleUrls: ['./shopping-cart-card.component.scss'],
})
export class ShoppingCartCardComponent implements OnInit {
  @Input('id') id: any;
  @Input('cartid') cartid: any;
  @Input('image') image: string;
  @Input('productName') title: string = 'Product Title';
  @Input('rate') rate: number = 4;
  @Input('quan') count: number = 4;
  @Input('description') info: string = 'Dummy description';

  @Input('price') price: number = 15;

  
  @Input('maxOrder') maxOrderCount: number;
  @Output('quantity') quantity = new EventEmitter();
  @Output('delete') deleteProduct = new EventEmitter();
  @Output('save') saveProduct = new EventEmitter();
  like: boolean = false;
  cart: any;
  cartItem: any;
  favourites: any;

  constructor(private Service: FormsService) {}
  ngOnInit() {

    this.Service.GetCartItems().subscribe((data) => {
      this.cart = data;
      this.cartItem = data.cartItems;
    });


    
  }


  increaseCount() {
    let cartItem = this.cartItem.find(r=>r.cartItemId==this.cartid)
    if (cartItem.quantity <cartItem.product.inventoryProducts[0].quantity) {
      this.count++;
    }
    this.quantity.emit(this.count);
  }



  decreaseCount() {
    let cartItem = this.cartItem.find(r=>r.cartItemId==this.cartid)
    if (cartItem.quantity > 1) {
      this.count--;
    }
    this.quantity.emit(this.count);
  }


  delete() {
    this.deleteProduct.emit(this.cartid);
  }

  // save() {

  //   this.like?this.like=!this.like:this.like=this.like;
  //   this.saveProduct.emit(this.cartid);
  // }
}
