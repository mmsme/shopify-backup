import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { CategoryService } from 'src/app/Services/Category/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  category: Category;

  constructor(
    private categoryServices: CategoryService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ar.params.subscribe((url) => {
      this.categoryServices
        .getCategoryById(url.id)
        .subscribe((_category: any) => (this.category = _category));
    });
  }

  showSubCategory(id: any) {
    this.router.navigateByUrl('/home/search/' + id);
  }
}
