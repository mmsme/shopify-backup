import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {
  public showPassword: boolean | any;
   public showPassword1: boolean|any;
  
  constructor(public customerService: FormsService, private router: Router) { }
  ngOnInit(): void {
  }
  Registerform = new FormGroup({
    Fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Lname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Username:new FormControl('',Validators.required),
    Gender:new FormControl('',Validators.required),
    Address :new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  OnSubmit() {
      this.customerService.postCustomerData(this.Registerform.value).subscribe(
        result => {
          console.log("success", this.Registerform)
          alert("your data Saved Successfuly");
          this.router.navigate(['']);
        })
    }
}
