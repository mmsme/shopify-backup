import { Product } from 'src/app/Models/Product';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
})
export class ProductContainerComponent implements OnInit {
  //* Slider Configurations
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    autoWidth: false,
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
    this.prodService.getTopSales().subscribe((data) => {
      this.Products = data;
    });
  }
}
