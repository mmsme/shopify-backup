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
  data: any;
  constructor(public customerService: FormsService, private router: Router) { }
  ngOnInit(): void {
  }
  Registerform = new FormGroup({
    Fname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Lname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Gender:new FormControl('',Validators.required),
    Address :new FormControl('',Validators.required),
    Email: new FormControl('',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  }
  );
  OnSubmit() {
      this.customerService.postCustomerData(this.Registerform.value).subscribe(
        result => {this.data=result
          localStorage.setItem('token', this.data.token)
          localStorage.setItem('email',this.data.email)
          
          alert("your data Saved Successfuly");
          this.router.navigate(['']);
        })
    }
}

