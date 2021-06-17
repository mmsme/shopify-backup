import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 step: any =1;
  constructor(public customerService:FormsService, private router: Router, private fb: FormBuilder) { }
  Editform: FormGroup;
  ngOnInit(): void {
     let token = localStorage.getItem('token');
    var splitted = token.split('.', 3); 
    let id = splitted[2];
     this.customerService.getCustomerData(id).subscribe(
       e => { e.applicationUser;
         console.log(e.applicationUser.fname);
          this.Editform = this.fb.group({
            fname: e.applicationUser.fname,
            lname: e.applicationUser.lname,
            email: e.applicationUser.email 
          });
        })
  }
  Registerform = new FormGroup({
    // Fname: new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(3),

    // ]),
    // Lname:new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(3),

    // ]),
    // Username:new FormControl('',Validators.required),
    // Address :new FormControl('',Validators.required),
    // Email: new FormControl('',[
    //   Validators.required,
    //   Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    // ]),
    // Password: new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(8),

    // ]),
  });
  OnSubmit() {
    // console.log("aaaaaa", this.Registerform)
    // if (this.step == 2) {
    //   this.customerService.postCustomerData(this.Registerform.value).subscribe(
    //     result => {
    //       console.log("sssssss", this.Registerform)
    //       alert("your data Saved Successfuly");
    //       this.router.navigate(['']);
    //     })
    // }
  }


}
