import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css'],
})
export class SideCartComponent implements OnInit {
  @Input('drawer') drawer: any;
  @Input('price') price: number = 0;
  constructor() {}

  ngOnInit() {}
}
