import { CategoryService } from './../../../../Services/Category/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css'],
})
export class SubNavbarComponent implements OnInit {
  /**========================================================================
   **                            Fake Categories Data
   *========================================================================**/
  Categories: Category[] = [];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.Categories = this._categoryService.getAllCategories();
  }
}
