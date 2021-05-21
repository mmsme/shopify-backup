import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Promotion',
  templateUrl: './Promotion.component.html',
  styleUrls: ['./Promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  Ads = [
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/1.png',
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
  constructor() {}

  ngOnInit() {}
}
