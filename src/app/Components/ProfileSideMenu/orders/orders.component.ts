import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Element1= document.getElementById("approved");
  Element2 = document.getElementById("shipped");
  Element3= document.getElementById("arrived");
  flag: any = true;
  flag2: any = false;
  carts: any = [];
  
  constructor(private http:HttpClient) { }
httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    ),
  };
  ngOnInit(): void {
    this.http.get<any>("http://localhost:23873/api/cart/customer-payed", this.httpOptions).subscribe(
      a => {
        this.carts = a;
        console.log(a)
      }
    )
  }

}
