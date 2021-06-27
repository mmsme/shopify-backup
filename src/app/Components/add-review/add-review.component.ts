import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
@Input('id') id;
  constructor(private service: ProductService,private router: Router) { }
 
   reviewForm = new FormGroup({
     comment: new FormControl(),
     review: new FormControl(),
  });
  ngOnInit(): void {
  }
  OnSubmit() {
    console.log(this.reviewForm.value)
    this.service.AddReview(this.id,this.reviewForm.value).subscribe(
      a => {
        console.log(a);
        //  this.router.navigate(['/home/productdetails/'+this.id]);
        location.reload
  
      }
    )
  }
}
