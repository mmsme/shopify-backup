import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/Models/Category';
import { port } from '../port';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = `http://localhost:${port}/api/Category`;
  private Categories: Category[] = [];
  private updatedCategories = new Subject<Category[]>();

  constructor(private http: HttpClient) {}

  getAllCategories(): any {
    this.http.get(this.url).subscribe((_categories: Category[]) => {
      this.Categories = [..._categories];
      this.updatedCategories.next([...this.Categories]);
    });
  }

  getCategoryById(id) {
    return this.http.get(this.url + '/' + id);
  }

  updatedCategoryHandler() {
    return this.updatedCategories.asObservable();
  }
}
