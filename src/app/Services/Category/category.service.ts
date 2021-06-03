import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /**========================================================================
   **                            Fake Categories Data
   *========================================================================**/
  Categories = [
    {
      main: 'Supermarket',
      sub: [
        'food cupboard',
        'beverages',
        'canned,jarred&packaged foods',
        'laundry',
        'beverages',
        'breakfast foods',
        'household cleaning',
      ],
      icon: 'fas fa-store',
      image: 'assets/images/category/supermarket.png',
    },
    {
      main: 'Fashion',
      sub: [`women's fashion`, `men's fashion`, `kid's fashion`],
      icon: 'fas fa-tshirt',
      image: 'assets/images/category/hoodie.png',
    },
    {
      main: 'Health & Beauty',
      sub: [
        'Beauty & Personal care',
        `Makeup`,
        `Hair care`,
        `Fragrance`,
        `Health care`,
      ],
      icon: 'fas fa-heart',
      image: 'assets/images/category/beauty.png',
    },
    {
      main: 'Home & office',
      sub: [
        `Home & kitchen`,
        `Office products`,
        ` Heating,Cooling & Air quality`,
        `Tools & Home improvement`,
        `Small appliances`,
        `Appliances`,
        `Cooking appliances`,
      ],
      icon: 'fas fa-couch',
      image: 'assets/images/category/couch.png',
    },
    {
      main: 'Electronics',
      sub: [
        `TV/Video`,
        `Home audio`,
        `Cameras`,
        `Headphones`,
        `Phones & Tablets`,
      ],
      icon: 'fas fa-lightbulb',
      image: 'assets/images/category/home.png',
    },
    {
      main: 'Computing',
      sub: [
        'Laptops',
        'Computer components',
        'Networking products',
        'Data storage',
        'Computer accessories',
      ],
      icon: 'fas fa-desktop',
      image: 'assets/images/category/imacligh.png',
    },
    {
      main: 'Sporting Goods',
      sub: [
        'Sports wear',
        'Sports equipment',
        'Outdoor & Adventure',
        'Accessories',
      ],
      icon: 'fas fa-football-ball',
      image: 'assets/images/category/sports.png',
    },
    {
      main: 'Gaming',
      sub: ['Video gaming', 'Arts/Crafts', 'Puppets', 'Scooters & Wagons'],
      icon: 'fas fa-gamepad',
      image: 'assets/images/category/xbox.png',
    },
    {
      main: 'Automobile',
      sub: [
        'Car care',
        'Oils/Fluids',
        'Interior accessories',
        'Exterior accessories',
      ],
      icon: 'fas fa-car',
      image: 'assets/images/category/auto.png',
    },
  ];

  constructor() {}

  getAllCategories(): any {
    return [...this.Categories];
  }
}
