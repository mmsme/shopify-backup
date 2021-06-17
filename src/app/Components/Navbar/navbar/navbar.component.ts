import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input('drawer') drawer: any;

  constructor() {}
  flag: any = 0;
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.flag = 1;
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.flag = 0;
  }
}
