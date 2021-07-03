import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input('id') id;
  @Input('product-name') title: string = 'demo title';
  @Input('product-details') info: string = 'demo info about the product';
  @Input('price') price: number = 0;
  @Input('image') image: string = '';
  @Input('rate') rate: number = 0;
  @Input('discount') discount: number = 0;
  @Input('dateRange') date: string = '';

  sale: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isHaveSale();
    console.log(this.price);
  }

  isHaveSale() {
    if (this.discount == 0) {
      this.sale = false;
    } else {
      if (this.date) {
        if (this.inRange(this.date)) {
          this.sale = true;
        }
      }
    }
  }

  inRange(data: string) {
    let _date = data.split(',');
    let today = new Date().getTime();
    let from = new Date(_date[0]).getTime();
    let to = new Date(_date[1]).getTime();

    return today >= from && today <= to;
  }

  openProduct(id: any) {
    console.log('id: ', id);
    this.router.navigate(['/customer/productdetails/' + this.id]);
  }
}
