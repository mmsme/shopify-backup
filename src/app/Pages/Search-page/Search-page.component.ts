import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { SubCategory } from 'src/app/Models/SubCategory';
import { ProductService } from 'src/app/Services/Product/product.service';
import { SubCategoryService } from 'src/app/Services/SubCategory/SubCategory.service';

@Component({
  selector: 'app-Search-page',
  templateUrl: './Search-page.component.html',
  styleUrls: ['./Search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  isLoading: boolean = true;
  subCategory: SubCategory;
  key: string;
  products: Product[] = [];
  constructor(
    private subCategoryServices: SubCategoryService,
    private ar: ActivatedRoute,
    private productServices: ProductService
  ) {}

  ngOnInit() {
    this.ar.queryParams.subscribe((url: any) => {
      if (url?.key) {
        this.key = url.key;
        this.search();
      }

      if (url.type && url.type == 'top_deals') {
        this.loadTopDeals();
      }

      if (url.type && url.type == 'top_sales') {
        this.loadTopSales();
      }
    });

    this.ar.params.subscribe((url) => {
      if (url.id) {
        this.subCategoryServices.getProductsById(url.id).subscribe(
          (SubCategory) => {
            this.subCategory = SubCategory;
            this.products = [...this.subCategory.products];
            this.productServices.updatedProducts.next([...this.products]);
            this.isLoading = false;
          },
          () => {
            this.isLoading = false;
          }
        );
      }
    });
  }

  filteredDataUpdate(data: any) {
    this.products = data;
  }

  search() {
    this.productServices.searchByKey(this.key).subscribe(
      (data) => {
        console.log('search res', data);
        this.products = [...data];
        this.productServices.updatedProducts.next([...data]);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  loadTopSales() {
    this.productServices.getTopDeals().subscribe(
      (data) => {
        this.products = [...data];
        this.productServices.updatedProducts.next([...data]);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }

  loadTopDeals() {
    this.productServices.getTopDeals().subscribe(
      (data) => {
        this.products = [...data];
        this.productServices.updatedProducts.next([...data]);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
