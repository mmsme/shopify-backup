import { Product } from './../../Models/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:5000/api/product';

  private Products: Product[] = [];
  private updatedProducts = new Subject<Product[]>();

  constructor(private HttpClient: HttpClient) {}

  getProducts(): any {
    this.HttpClient.get('').subscribe((data) => {});
  }

  updatedProductsHandler() {
    return this.updatedProducts.asObservable();
  }

  GetById(id: number) {
    const newUrl = this.baseUrl + '/details/' + id;
    return this.HttpClient.get<any>(newUrl);
  }

  getTopSales() {
    return this.HttpClient.get<Product[]>(this.baseUrl + '/top-seales').pipe(
      map((data: any) => {
        return data.map((p: Product) => {
          return {
            productId: p.productId,
            productName: p.productName,
            description: p.description,
            details: p.details,
            manufacture: p.manufacture,
            size: p.size,
            color: p.color,
            quantity: p.quantity,
            Brand: p.Brand,
            VerifiedBrandId: p.VerifiedBrandId,
            weight: p.weight,
            brandId: p.brandId,
            productImages: 'http://localhost:5000/' + p.productImages[0].image,
            quantitySealed: p.quantitySealed,
            price: p.price,
            rangeDate: p.rangeDate,
            CreatedAt: p.CreatedAt,
            UpdateAt: p.UpdateAt,
            subCategotyId: p.subCategotyId,
            subCategory: p.subCategory,
            promotionId: p.promotionId,
            promotions: p.promotions,
            isdeletedBySeller: p.isdeletedBySeller,
            isdeletedBySpoify: p.isdeletedBySpoify,
            reviews: p.reviews,
            views: p.views,
            inventoryProducts: p.inventoryProducts,
            discount: p.discount,
            rate: p.rate,
          };
        });
      })
    );
  }
}
