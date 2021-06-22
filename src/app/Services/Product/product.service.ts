import { Product } from './../../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:5000/api/product';
  
  private Products: Product[] = [];
  updatedProducts = new Subject<Product[]>();
  
  constructor(private HttpClient: HttpClient) {}
    httpOptions = {
        headers : new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem("token")}`)
      };
      
      httpOptions2 = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }

  getProducts(): any {
    // this.HttpClient.get('').subscribe((data) => {});
  }

  updatedProductsHandler() {
    return this.updatedProducts.asObservable();
  }

  GetById(id: number) {
    const newUrl = this.baseUrl + '/details/' + id;
    return this.HttpClient.get<any>(newUrl);
  }

  getTopSales() {
    return this.HttpClient.get<Product[]>(this.baseUrl + '/top-seales');
  }

  searchByKey(key: string) {
    return this.HttpClient.get<Product[]>(this.baseUrl + '/search?name=' + key);
  }

  // mapImages(_products: Product[]) {
  //   console.log(_products);

  //   return _products?.map((p) => {
  //     return {
  //       productId: p.productId,
  //       productName: p.productName,
  //       description: p.description,
  //       details: p.details,
  //       manufacture: p.manufacture,
  //       size: p.size,
  //       color: p.color,
  //       quantity: p.quantity,
  //       Brand: p.Brand,
  //       VerifiedBrandId: p.VerifiedBrandId,
  //       weight: p.weight,
  //       brandId: p.brandId,
  //       productImages: p.productImages.map((e) => {
  //         return {
  //           image: '',
  //           isdeleted: false,
  //           productId: 6,
  //         };
  //       }),
  //       quantitySealed: p.quantitySealed,
  //       price: p.price,
  //       rangeDate: p.rangeDate,
  //       CreatedAt: p.CreatedAt,
  //       UpdateAt: p.UpdateAt,
  //       subCategotyId: p.subCategotyId,
  //       subCategory: p.subCategory,
  //       promotionId: p.promotionId,
  //       promotions: p.promotions,
  //       isdeletedBySeller: p.isdeletedBySeller,
  //       isdeletedBySpoify: p.isdeletedBySpoify,
  //       reviews: p.reviews,
  //       views: p.views,
  //       inventoryProducts: p.inventoryProducts,
  //       discount: p.discount,
  //       rate: p.rate,
  //     };
  //   });
  // }


  postRecentlyView(id: number) {
    const newUrl ='http://localhost:23873/api/RecentlyViews/add-recently-view/'+id ;
    return this.HttpClient.post<any>(newUrl,null,this.httpOptions);
  }
  GetRecentlyView() {
    const newUrl ='http://localhost:23873/api/RecentlyViews/get-recently-view' ;
    return this.HttpClient.get<any>(newUrl,this.httpOptions);
  }
}
