import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from 'src/app/Models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:5000/api/Category';
  private Categories: Category[] = [];
  private updatedCategories = new Subject<Category[]>();

  constructor(private http: HttpClient) {}

  getAllCategories(): any {
    this.http.get(this.url).subscribe((data: Category[]) => {
      this.Categories = [...data];
      this.updatedCategories.next([...this.Categories]);
    });
  }

  updatedCategoryHandler() {
    return this.updatedCategories.asObservable();
  }
}
