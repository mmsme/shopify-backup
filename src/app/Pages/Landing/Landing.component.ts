import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-Landing',
  templateUrl: './Landing.component.html',
  styleUrls: ['./Landing.component.scss'],
})
export class LandingComponent implements OnInit {
  totalPrice: number = 0;

  constructor() {}

  ngOnInit() {}

  updateTotalPrice(event) {
    this.totalPrice = event;
  }
}
