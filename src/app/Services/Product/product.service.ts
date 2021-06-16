import { Product } from './../../Models/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private Products: Product[] = [
    {
      Id: 1,
      ProductName: 'Xbox Series X',
      ProductDescription:
        '4K Gaming 120 FPS | 1T SSD | 8GB Ram | AMD graphic card | black color',
      Images: ['assets/images/xbox.png'],
      Brand: 'Xbox',
      Color: 'Black',
      Discount: 10,
      Price: 450,
      Promotion: null,
      Weight: 400,
      Rate: 4,
      Size: '',
      SubCategory: 'Gaming',
      UpdateAt: null,
      Stock: 5,
      ProductSpecification: '',
    },
    {
      Id: 2,
      ProductName: 'Iphone 8 Plus',
      ProductDescription:
        '32GB Memory | 3GB Ram | A11 Bionic | Space Gray - For AT&T | T-Mobile (Renewed)',
      Images: ['assets/images/iphone8.png'],
      Brand: 'Appel',
      Color: 'Black, Red, Sliver, Gold',
      Discount: 15,
      Price: 350,
      Promotion: null,
      Weight: 250,
      Rate: 4,
      Size: '5.7inch',
      SubCategory: 'Computing',
      UpdateAt: null,
      Stock: 3,
      ProductSpecification: '',
    },
    {
      Id: 3,
      ProductName: 'Beats Solo3',
      ProductDescription:
        'Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model',
      Images: ['assets/images/headephone.png'],
      Brand: 'Beats',
      Color: 'Blue, White, Red, Black',
      Discount: 25,
      Price: 120,
      Promotion: null,
      Weight: 200,
      Rate: 3,
      Size: 'over ear',
      SubCategory: 'Electronics',
      UpdateAt: null,
      Stock: 8,
      ProductSpecification: '',
    },
    {
      Id: 4,
      ProductName: 'Apple iMac 27',
      ProductDescription:
        'with Retina 5K Display, 3.6GHz 10-Core Intel Core i9, 8GB RAM, 512GB SSD, AMD Radeon Pro 5300 4GB, Mid 2020',
      Images: ['assets/images/imacligh.png'],
      Brand: 'Appel',
      Color: 'Sliver, White, Black',
      Discount: 30,
      Price: 2800,
      Promotion: null,
      Weight: 2000,
      Rate: 4,
      Size: '27inch',
      SubCategory: 'Computing',
      UpdateAt: null,
      Stock: 4,
      ProductSpecification: '',
    },
    {
      Id: 5,
      ProductName: 'Teliso Coffee Machine',
      ProductDescription:
        'Espresso Machine, 15 Bar Espresso Maker with Milk Frother Wand and Compact Design, Professional Espresso Coffee Machine for Cappuccino and Latte',
      Images: ['assets/images/coffemachine.png'],
      Brand: 'Teliso',
      Color: 'Silver',
      Discount: 5,
      Price: 200,
      Promotion: null,
      Weight: 5000,
      Rate: 3,
      Size: '50 * 90 inch',
      SubCategory: 'House & Office',
      UpdateAt: null,
      Stock: 10,
      ProductSpecification: '',
    },
    {
      Id: 6,
      ProductName: 'Nike Sport Sneakers',
      ProductDescription:
        'MEHOTO Mens Air Running Sneakers, Men Sport Fitness Gym Jogging Walking Lightweight Shoes, Size 7-12.5',
      Images: ['assets/images/sneakers.png'],
      Brand: 'Nike',
      Color: 'Blue, Red, White, Black',
      Discount: 20,
      Price: 80,
      Promotion: null,
      Weight: 300,
      Rate: 4,
      Size: 'X-large, xx-large, medium, 3X',
      SubCategory: 'Fashion',
      UpdateAt: null,
      Stock: 0,
      ProductSpecification: '',
    },
    {
      Id: 7,
      ProductName: 'Lee Black Hoodie',
      ProductDescription:
        'Hanes Men’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt',
      Images: ['assets/images/hoodie.png'],
      Brand: 'Lee',
      Color: 'Black, White, Red, Blue',
      Discount: 0,
      Price: 50,
      Promotion: null,
      Weight: 200,
      Rate: 3,
      Size: 'X-large, Large, 3X',
      SubCategory: null,
      UpdateAt: null,
      Stock: 0,
      ProductSpecification: '',
    },
  ];

  constructor() {}

  getProducts(): any {
    return [...this.Products];
  }
}

//   {
//     ProductName: 'SAMSUNG 43-Inch Class QLED Q60A Series',
//     ProductDescription:
//       'SAMSUNG 43-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN43Q60AAFXZA, 2021 Model)',
//     Images: 'assets/images/tv.png',
//     Rate: 5,
//     Price: 350,
//   },
//   {
//     ProductName: 'Sirdar S-700 S-800',
//     ProductDescription:
//       '26/29 inch Mountain Bike for Adult and Youth, 27 Speed Lightweight Mountain Bikes Dual Disc Brakes Suspension Fork with 2 Replaceable Saddle',
//     Images: 'assets/images/bike.png',
//     Rate: 3,
//     Price: 200,
//   },
// ];
