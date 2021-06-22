import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {
  //* Slider Configurations
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1080: {
        items: 5,
      },
      1295: {
        items: 6,
      },
    },
    nav: false,
  };

  Products: any = [];
  constructor(private Service: FormsService) {}

  ngOnInit() {
    this.Service.GetFav().subscribe((data) => {
      this.Products = data;
      console.log(data)
      // this.Products.productImages
    });
  }
}
