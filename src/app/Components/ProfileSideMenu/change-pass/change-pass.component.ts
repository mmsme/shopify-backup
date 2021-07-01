import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private customerService:FormsService) { }

  form: FormGroup =new FormGroup({
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
  Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.).{8,32}$/),
    ]),
    CPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
  
    ]),
  });
  ngOnInit(): void {
    
  }
  OnSubmit() {
    let data = {
      Token: localStorage.getItem("token"),
      Email: localStorage.getItem("email"),
      Password: this.form.get("Password")?.value,
      CPassword: this.form.get("CPassword")?.value
    }
    console.log(data)
    this.customerService.EditCustomerPassword(data).subscribe(
      a => {
        alert("Your Password Changed Successfully")
      }
    )
   
  }
}

