import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
})
export class ProductContainerComponent implements OnInit {
  n = [1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1];

  Products = [
    {
      title: 'Xbox Series X',
      info: '4K Gaming 120 FPS, 1T SSD',
      img: 'assets/images/xbox.png',
      rate: 4,
      price: 450,
      sale: true,
    },
    {
      title: 'ihpone 8 Plus',
      info: '32GB Ram, A11 Bionic,Black Color',
      img: 'assets/images/iphone8.png',
      rate: 4,
      price: 350,
      sale: false,
    },
    {
      title: 'Beats Headphone 350shp',
      info: 'Noise Cancellation, Over Ears, Blue Color',
      img: 'assets/images/headephone.png',
      rate: 3,
      price: 150,
      sale: true,
    },
    {
      title: 'Imac Surface 13',
      info: '32GB Ram, Core i7, 2TB HDD, Color White',
      img: 'assets/images/imacligh.png',
      rate: 4,
      price: 1200,
      sale: true,
    },
    {
      title: 'Teliso Coffee Machine',
      info: '6 Cap Capacity, 220v, Aluminum body',
      img: 'assets/images/coffemachine.png',
      rate: 4,
      price: 250,
      sale: false,
    },
    {
      title: 'Nike Sport Sneakers',
      info: 'Size: 4X, Men Model, Color Blue-red',
      img: 'assets/images/sneakers.png',
      rate: 4,
      price: 80,
      sale: false,
    },
    {
      title: 'Lee Black Hoodie',
      info: 'Size: x-large, 3X, Color Black',
      img: 'assets/images/hoodie.png',
      rate: 4,
      price: 50,
      sale: true,
    },
    {
      title: 'LG QLED TV 52 inch',
      info: 'QLED 52in, Black, Smart TV, OS: Android',
      img: 'assets/images/tv.png',
      rate: 5,
      price: 350,
      sale: true,
    },
    {
      title: 'Men Air Bike',
      info: 'Air Bike, Size: 24, Color: red',
      img: 'assets/images/bike.png',
      rate: 3,
      price: 200,
      sale: false,
    },
  ];

  //* Slider Configurations
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
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
      1190: {
        items: 6,
      },
    },
    nav: false,
  };

  constructor() {}

  ngOnInit() {}
}
