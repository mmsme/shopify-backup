import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/Product';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  private port = 23873;
  private url = `http://localhost:${this.port}/api/SubCategory`;

  constructor(private http: HttpClient) {}

  getProductsById(id) {
    return this.http.get<any>(this.url + '/' + id);
  }
}
