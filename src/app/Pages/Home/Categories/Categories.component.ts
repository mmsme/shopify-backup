import { Category } from 'src/app/Models/Category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Categories',
  templateUrl: './Categories.component.html',
  styleUrls: ['./Categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  Categories!: Category[];

  constructor(
    private _categoryServices: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this._categoryServices.getAllCategories();
    this._categoryServices
      .updatedCategoryHandler()
      .subscribe((data: Category[]) => {
        this.Categories = [...data];
      });
  }

  showCategory(id: any) {
    this.router.navigateByUrl('/customer/category/' + id);
  }
}
