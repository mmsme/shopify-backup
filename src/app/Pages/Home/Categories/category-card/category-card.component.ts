import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input('image') image: string = '';
  @Input('name') name: string = 'Demo title';

  constructor() {}

  ngOnInit() {}

  ToCapital(word: string) {
    return word?.charAt(0).toUpperCase() + word.slice(1);
  }
}
