import { Component, OnInit } from '@angular/core';
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

  constructor(private productserice: ProductService, private service: FormsService) { }
  
  
  ngOnInit(): void {
    this.productserice.GetById(8).subscribe((a) => {
      this.product = a;
      this.imgSrc = a.productImages[0].image;
      console.log(a);
      this.productview.append(this.product.details);
    });
    // this.productserice.postRecentlyView(4).subscribe((b) => {
    //   console.log(b);
    // });
  }
  openImage(img : any) {
    console.log(img)
    this.imgSrc = img.image
  }

  AddTOCart(Quantity: any, ProductId: any) {
    this.service.AddCartItems(Quantity, ProductId).subscribe(
      a=> console.log(a)
    )
  }
}
