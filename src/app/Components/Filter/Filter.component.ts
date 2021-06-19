import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { SubCategoryService } from 'src/app/Services/SubCategory/SubCategory.service';

@Component({
  selector: 'app-Filter',
  templateUrl: './Filter.component.html',
  styleUrls: ['./Filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input('sub-category') subCategory: any = null;
  @Input('products') products: Product[] = [];
  @Output('filter') filter = new EventEmitter<Product[]>();
  ProductsInitValue: Product[] = [];
  // all properties
  Rates: number[] = [5, 4, 3, 2, 1];
  Brands: string[] = [];
  Colors: string[] = [];
  Size: string[] = [];
  maxPrice: number = 0;
  minPrice: number = 0;

  sizesForm: FormGroup;
  brandsForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private productServices: ProductService,
    private subCategoryServices: SubCategoryService
  ) {
    this.sizesForm = this.fb.group({
      sizes: fb.array([]),
    });

    this.brandsForm = this.fb.group({
      brands: fb.array([]),
    });
  }

  ngOnInit() {
    //? set Products Repo To Filter it

    this.ProductsInitValue = [...this.products];
    console.log(this.ProductsInitValue);

    this.getAllBrands();
    this.getAllSizes();
    this.getAllColors();

    this.addCheckBoxes(this.sizesFormArray, this.Size);
    this.addCheckBoxes(this.brandsFormArray, this.Brands);

    // listen to Changes
    this.productServices.updatedProductsHandler().subscribe((_products) => {
      this.products = [..._products];
      this.resetFilter();
      this.getAllBrands();
      this.getAllSizes();
      this.getAllColors();

      this.addCheckBoxes(this.sizesFormArray, this.Size);
      this.addCheckBoxes(this.brandsFormArray, this.Brands);
    });
  }

  get sizesFormArray() {
    return this.sizesForm.get('sizes') as FormArray;
  }

  get brandsFormArray() {
    return this.brandsForm.get('brands') as FormArray;
  }

  private addCheckBoxes(form: FormArray, arr: any) {
    arr.forEach(() => {
      form.push(new FormControl(false));
    });
  }

  private getAllBrands() {
    this.products.forEach((p) => {
      if (p.manufacture != null && p.manufacture != '') {
        this.Brands.push(p.manufacture.toLowerCase().trim());
      }
    });

    this.Brands = [...new Set(this.Brands)];
  }

  private getAllSizes() {
    this.products.forEach((p) => {
      if (p.size != null && p.size != '') {
        var sizeArray = p.size.split(',');
        sizeArray.forEach((e) => {
          if (e != '') {
            this.Size.push(e.toLowerCase().trim());
          }
        });
      }
    });

    this.Size = [...new Set(this.Size)];
  }

  private getAllColors() {
    this.products.forEach((p) => {
      if (p.color != null && p.color != '') {
        var colorArray = p.color.split(',');
        colorArray.forEach((e: string) => {
          if (e != '') {
            this.Colors.push(e.toLowerCase().trim());
          }
        });
      }
    });

    this.Colors = [...new Set(this.Colors)];
  }

  public filterByColor(_color: string) {
    let FilterResult = [];
    this.ProductsInitValue.forEach((product) => {
      var productsColor = (product.color as string).split(',');
      console.log('Colors', productsColor);

      productsColor.forEach((color: string) => {
        if (color.toLowerCase().trim() == _color) {
          FilterResult.push(product);
        }
      });
    });
    if (FilterResult.length != 0) {
      this.filter.emit([...FilterResult]);
    } else {
      this.filter.emit([...this.ProductsInitValue]);
    }
  }

  public filterByBrands() {
    let formData = this.brandsForm.value.brands as [];
    let brands_selected: string[] = [];

    formData.forEach((e, i) => {
      if (e == true) {
        brands_selected.push(this.Brands[i]);
      }
    });

    let FilterRes: any[] = [];
    if (brands_selected.length != 0) {
      brands_selected.forEach((brand) => {
        let res = this.ProductsInitValue.filter((product) => {
          return product.manufacture.toLowerCase().trim() == brand;
        });

        FilterRes = FilterRes.concat(res);
      });
      FilterRes = [...new Set(FilterRes)];

      this.filter.emit([...FilterRes]);
    } else {
      this.filter.emit([...this.ProductsInitValue]);
    }
  }

  public fiterBySizes() {
    let myResult: Product[] = [];
    let formData = this.sizesForm.value.sizes as [];
    let selected_sizes: string[] = [];

    formData.forEach((e, i) => {
      if (e == true) {
        selected_sizes.push(this.Size[i]);
      }
    });

    if (selected_sizes.length != 0) {
      selected_sizes.forEach((size) => {
        this.ProductsInitValue.forEach((product) => {
          let productSizes = product.size.split(',');
          productSizes.forEach((psize) => {
            if (psize.toLowerCase().trim() == size) {
              myResult.push(product);
            }
          });
        });
      });
      myResult = [...new Set(myResult)];
      this.filter.emit([...myResult]);
    } else {
      this.filter.emit([...this.ProductsInitValue]);
    }
  }

  toCapital(text: string): string {
    return text?.charAt(0).toUpperCase() + text.slice(1);
  }

  resetFilter() {
    this.Brands = [];
    this.Size = [];
    this.Colors = [];

    this.sizesFormArray.clear();
    this.brandsFormArray.clear();
  }
}
