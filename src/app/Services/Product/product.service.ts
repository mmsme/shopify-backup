import { Product } from './../../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private port = 23873;
  private baseUrl: string = `http://localhost:${this.port}/api`;

  private Products: Product[] = [];
  updatedProducts = new Subject<Product[]>();

  constructor(private HttpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('token')}`
    ),
  };

  httpOptions2 = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getProducts(): any {
    // this.HttpClient.get('').subscribe((data) => {});
  }

  updatedProductsHandler() {
    return this.updatedProducts.asObservable();
  }

  GetById(id: number) {
    const newUrl = this.baseUrl + '/product/details/' + id;
    return this.HttpClient.get<any>(newUrl);
  }

  getTopSales() {
    return this.HttpClient.get<Product[]>(this.baseUrl + '/product/top-seales');
  }

  getTopDeals() {
    return this.HttpClient.get<Product[]>(this.baseUrl + '/Product/top-deals');
  }

  searchByKey(key: string) {
    return this.HttpClient.get<Product[]>(
      this.baseUrl + '/product/search?name=' + key
    );
  }

  postRecentlyView(id: number) {
    const newUrl = this.baseUrl + '/RecentlyViews/add-recently-view/' + id;
    return this.HttpClient.post<any>(newUrl, null, this.httpOptions);
  }

  GetRecentlyView() {
    const newUrl = this.baseUrl + '/RecentlyViews/get-recently-view';
    return this.HttpClient.get<any>(newUrl, this.httpOptions);
  }
  AddReview(ProductId: any, body: any) {
    const newUrl = 'http://localhost:23873/api/Review/' + ProductId;
    return this.HttpClient.post<any>(newUrl, body, this.httpOptions);
  }
}
