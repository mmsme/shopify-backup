import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { SubCategory } from 'src/app/Models/SubCategory';
import { SubCategoryService } from 'src/app/Services/SubCategory/SubCategory.service';

@Component({
  selector: 'app-sub-category-page',
  templateUrl: './sub-category-page.component.html',
  styleUrls: ['./sub-category-page.component.scss'],
})
export class SubCategoryPageComponent implements OnInit {
  isLoading: boolean = true;
  subCategory: SubCategory;
  products: Product[] = [];

  constructor(
    private subCategoryServices: SubCategoryService,
    private ar: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ar.params.subscribe((url) => {
      const id = url.id;
      this.subCategoryServices.getProductsById(id).subscribe((SubCategory) => {
        this.subCategory = SubCategory;
        this.products = [...this.subCategory.products];
        this.isLoading = false;
      });
    });
  }

  filteredDataUpdate(data: any) {
    console.log(data);
    this.products = data;
  }
}
