import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: any;
  // Iproduct[]=[];
  totalPrice:number=0;
  isEmpty:boolean=false;
  constructor() {
    this.products=[{
      Id:5,
      Name:'Book',
      Price:50,
      Quentity:10,
      Description:'this is the first product',
      Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jmHWog-jr3jgQ1NMI4vMzacHuKDBDdb50A&usqp=CAU',
      Discount:5 ,
      Category_Id:2
    },{
      Id:5,
      Name:'Book',
      Price:50,
      Quentity:10,
      Description:'this is the first product',
      Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1jmHWog-jr3jgQ1NMI4vMzacHuKDBDdb50A&usqp=CAU',
      Discount:5 ,
      Category_Id:2
    }]
  }

  ngOnInit(): void {
  }

}
