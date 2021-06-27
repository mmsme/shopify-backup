import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  productview = document.getElementById('ProdDetail');
  imgSrc: string;
  stars = [1,2,3,4,5];
  cartflag: any = false;
  commentflag: any = false;
  id: any;
  constructor(private productserice: ProductService, private service: FormsService,
    private route: ActivatedRoute) { }
  
  
  email=localStorage.getItem('email');
  ngOnInit(): void {
    this.route.params.subscribe((a)=> this.id=a.id)
    
    this.productserice.GetById(this.id).subscribe((a) => {
      this.product = a;
      this.imgSrc = a.productImages[0].image;
      console.log(a);
      for (var i = 0; i < a.reviews.length; i++) {
        if (a.reviews[i].customer.applicationUser.email == this.email) {
          this.commentflag = true;
        };
      }
      //  this.productview.append(this.product.details);
    });
    this.service.GetCartItems().subscribe(
      a => {
        for (var i = 0; i < a.cartItems.length; i++) {
          if (a.cartItems[i].product.productId == this.product.productId) {
            this.cartflag = true;
          };
        }
      }
    );
    this.productserice.postRecentlyView(this.product.productId).subscribe(
        b => {
           console.log(b);
        },
        e=>console.log(e)
      );
    }
  openImage(img : any) {
    console.log(img)
    this.imgSrc = img.image
  }

  AddTOCart(Quantity: any, ProductId: any) {
    this.service.AddCartItems(Quantity, ProductId).subscribe(
      a => {
        // console.log(a)
        this.ngOnInit()
      }
    )
  }
}
