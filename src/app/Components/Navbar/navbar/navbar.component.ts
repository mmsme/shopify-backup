import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input('drawer') drawer: any;
  @Input('cart-price') cartPrice: number = 0;
  public userDetails;
  flag: any = false;

  constructor() {}
  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');
    if (localStorage.getItem('token')||storage) {
      this.flag = true;
      this.userDetails = JSON.parse(storage);
      console.log(this.flag)
    }
    else {
      this.logout();
    }
  }
  
  logout(): void {
     localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.flag = false;

    localStorage.removeItem('google_auth');
  }
}
