import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  constructor(private service: ProductService) { }
 
   reviewForm = new FormGroup({
     comment: new FormControl(),
     review: new FormControl(),
  });
  ngOnInit(): void {
  }
  OnSubmit() {
    console.log(this.reviewForm.value)
    this.service.AddReview(8,this.reviewForm.value).subscribe(
      a => {
        console.log(a);
        this.ngOnInit();
      }
    )
  }
}
