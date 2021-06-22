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
 Editform: FormGroup;
  constructor(public customerService:FormsService, private router: Router, private fb: FormBuilder) { }
  
  ngOnInit(): void {
   
     this.customerService.getCustomerData().subscribe(
       e => { e.applicationUser;
         console.log(e.applicationUser.fname);
          this.Editform = this.fb.group({
            fname: e.applicationUser.fname,
            lname: e.applicationUser.lname,
            email: e.applicationUser.email 
          });
        })
  }
  
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
