import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.css']
})
export class RecentlyViewedComponent implements OnInit {
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

  Products: Product[] = [];
  constructor(private prodService: ProductService) {}

  ngOnInit() {
    this.prodService.GetRecentlyView().subscribe((data) => {
      this.Products = data;
      console.log(data)
      // this.Products.productImages
    });
  }
}
