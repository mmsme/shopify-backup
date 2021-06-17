import { CategoryService } from './../../../../Services/Category/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/Category';
@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css'],
})
export class SubNavbarComponent implements OnInit {
  Categories: Category[] = [];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this._categoryService.getAllCategories();
    this._categoryService
      .updatedCategoryHandler()
      .subscribe((data: Category[]) => {
        this.Categories = data;
      });
  }
}
