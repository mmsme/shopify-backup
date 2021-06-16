import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-Filter',
  templateUrl: './Filter.component.html',
  styleUrls: ['./Filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input('products') products: Product[] = [];
  @Output('filter') filter = new EventEmitter<Product[]>();
  // all properties
  Rates: number[] = [5, 4, 3, 2, 1];
  Brands: string[] = [];
  Colors: string[] = [];
  Size: string[] = [];
  maxPrice: number = 0;
  minPrice: number = 0;

  FilterResult: Product[] = [];

  sizesForm: FormGroup;
  brandsForm: FormGroup;

  constructor(public fb: FormBuilder, private productServices: ProductService) {
    this.sizesForm = this.fb.group({
      sizes: fb.array([]),
    });

    this.brandsForm = this.fb.group({
      brands: fb.array([]),
    });
  }

  ngOnInit() {
    this.products = this.productServices.getProducts();
    this.getAllBrands();
    this.getAllSizes();
    this.getAllColors();

    this.addCheckBoxes(this.sizesFormArray, this.Size);
    this.addCheckBoxes(this.brandsFormArray, this.Brands);
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
      if (p.Brand != null || p.Brand != '') {
        this.Brands.push(p.Brand.toLowerCase().trim());
      }
    });

    this.Brands = [...new Set(this.Brands)];
  }

  private getAllSizes() {
    this.products.forEach((p) => {
      if (p.Size != null || p.Size != '') {
        var sizeArray = p.Size.split(',');
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
      if (p.Color != null || p.Color != '') {
        var colorArray = p.Color.split(',');
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
    this.FilterResult = [];
    this.products.forEach((product) => {
      var productsColor = (product.Color as string).split(',');
      productsColor.forEach((color: string) => {
        if (color.toLowerCase().trim() == _color) {
          this.FilterResult.push(product);
        }
      });
    });

    this.filter.emit([...this.FilterResult]);
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
        let res = this.products.filter((product) => {
          return product.Brand.toLowerCase().trim() == brand;
        });

        FilterRes = FilterRes.concat(res);
      });
      FilterRes = [...new Set(FilterRes)];

      this.filter.emit(FilterRes);
    } else {
      this.filter.emit(this.products);
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
        this.products.forEach((product) => {
          let productSizes = product.Size.split(',');
          productSizes.forEach((psize) => {
            if (psize.toLowerCase().trim() == size) {
              myResult.push(product);
            }
          });
        });
      });

      myResult = [...new Set(myResult)];
      this.filter.emit(myResult);
    } else {
      this.filter.emit(this.products);
    }
  }

  toCapital(text: string): string {
    return text?.charAt(0).toUpperCase() + text.slice(1);
  }
}
