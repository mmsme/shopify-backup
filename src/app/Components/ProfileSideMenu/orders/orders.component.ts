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
  flag: any = false;
  flag2: any = false;
  carts: any = [];
  closedOrders = [];
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
        // this.carts = a;
        if (a.length > 0) {
          for (let i = 0; i < a.length; i++) { 
             if (a[i].status.statusName != 'Arrived') {
              this.flag = true;
              this.carts.push(a[i])
              
            }
            else if (a[i].status.statusName == 'Arrived') {
              this.flag2 = true;
              this.closedOrders.push(a[i])
              
            }
          }
          console.log("open",this.carts)
                console.log("close", this.closedOrders)
        }
        else {
          this.flag = false;
          this.flag2=false
        }
        console.log(a)
      }
    )
  }

}
