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
  @Output('cartId') cartId = new EventEmitter();
 

  constructor(private prodServ: ProductService, private Service: FormsService) {
    this.cartItem = [];
  }

  ngOnInit(): void {
    this.Service.GetCartItems().subscribe((a) => {
      console.log('cart', a);
      this.cart = a;
      this.cartItem = a.cartItems;
      this.isLoading = false;
      this.total.emit(this.cart.cost);
      this.cartId.emit(this.cart.cartId);
    });


  }


  updateBill(productId: any, quantity: number) {
    let quentity= quantity;
    this.Service.EditCartItems(quentity,productId).subscribe((a) => {
      this.ngOnInit();
    });

  }



  deleteFromCart(cartItemId) {
    if(confirm("are you sure to delete?")){
    this.Service.DeleteCartItem(cartItemId).subscribe((a) => {
      //alert('Deleted');
      this.ngOnInit();
    });
  }
  }



  Fav(productId: any) {
    this.Service.AddCartItemsTOFav(productId).subscribe((a) => {
     // alert('Added');
      this.ngOnInit();
    });
  }
 
}