import { Category } from 'src/app/Models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  Categories!: Category[];

  constructor(private _categoryServices: CategoryService) {}

  ngOnInit() {
    this.Categories = this._categoryServices.getAllCategories();
  }
}
