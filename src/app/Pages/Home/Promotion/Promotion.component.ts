import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-Promotion',
  templateUrl: './Promotion.component.html',
  styleUrls: ['./Promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  Ads = [
    'assets/images/banners/banner2.webp',
    'assets/images/banners/banner3.webp',
    'assets/images/banners/banner4.webp',
    'assets/images/banners/banner5.webp',
    'assets/images/banners/banner6.webp',
    'assets/images/banners/banner7.webp',
    'assets/images/banners/banner8.webp',
    'assets/images/banners/banner9.webp',
    'assets/images/banners/banner10.webp',
    'assets/images/banners/banner11.webp',
    'assets/images/banners/banner12.png',
    'assets/images/banners/banner13.webp',
    'assets/images/banners/banner14.webp',
    'assets/images/banners/banner16.jpg',
    'assets/images/banners/banner17.jpg',
    'assets/images/banners/banner18.png',
    'assets/images/banners/banner19.png',
    'assets/images/banners/banner20.jpg',
    'assets/images/banners/baner21.jpg',
    'assets/images/banners/baner22.jpg',
    'assets/images/banners/baner23.jpg',
    'assets/images/banners/baner24.jpg',
    'assets/images/banners/baner25.jpg',
    'assets/images/banners/baner26.jpg',
    'assets/images/banners/baner27.jpg',
    'assets/images/banners/baner28.jpg',
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
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
