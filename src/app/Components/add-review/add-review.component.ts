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

  constructor() { }
 
  ngOnInit(): void {
  }
  
}
