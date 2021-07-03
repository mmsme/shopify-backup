import { Product } from 'src/app/Models/Product';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Router } from '@angular/router';

enum type {
  top_sales = 1,
  top_deals = 2,
}

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
})
export class ProductContainerComponent implements OnInit {
  @Input('title') title: string = '';
  products: Product[] = [];
  @Input('type') typeNum: number;
  isLoading: boolean = true;

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
      566: {
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
  constructor(private prodService: ProductService, private route: Router) {}

  ngOnInit() {
    if (this.typeNum == 1) {
      this.loadTopDeals();
    }

    if (this.typeNum == 2) {
      this.loadTopSales();
    }
  }

  loadTopDeals() {
    this.prodService.getTopSales().subscribe(
      (topDeals: Product[]) => {
        /// to filter valid Deals and remove expired Deals
        this.products = topDeals.filter((e) => {
          return this.inRange(e.rangeDate);
        });
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  loadTopSales() {
    this.prodService.getTopDeals().subscribe(
      (topSeals: Product[]) => {
        this.products = [...topSeals];
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  viewMore() {
    this.route.navigate(['/customer/search'], {
      queryParams: { type: type[this.typeNum] },
    });
  }

  inRange(data: string) {
    let _date = data.split(',');
    let today = new Date().getTime();
    let from = new Date(_date[0]).getTime();
    let to = new Date(_date[1]).getTime();

    return today >= from && today <= to;
  }
}
