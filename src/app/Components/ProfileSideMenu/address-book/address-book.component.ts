import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  constructor(public customerService:FormsService,  private fb: FormBuilder) { }
  token: any;
  email: any;
  resetform: FormGroup =new FormGroup({
    Address: new FormControl('',Validators.required)
  });
  Editform: FormGroup;
  ngOnInit(): void {
     this.customerService.getCustomerData().subscribe(
       e => { e.applicationUser;
         console.log(e.applicationUser.fname);
          this.Editform = this.fb.group({
            address: e.applicationUser.address
          });
        }) 
  }
  OnSubmit() {
   this.customerService.EditCustomerAddress(this.Editform.value).subscribe(
        result => {
          alert("your data Saved Successfuly");
          this.ngOnInit();
        })}
}

