import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { port } from '../port';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  private url = `http://localhost:${port}/api/SubCategory`;

  constructor(private http: HttpClient) {}

  getProductsById(id) {
    return this.http.get<any>(this.url + '/' + id);
  }
}
