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
  constructor(private route: ActivatedRoute,private router: Router ,public customerService:FormsService,  private fb: FormBuilder) { }
  token: any;
  email: any;
  resetform: FormGroup =new FormGroup({
    Address: new FormControl('',[Validators.required,])
  });
  Editform: FormGroup;
  ngOnInit(): void {
     let token = localStorage.getItem('token');
    var splitted = token.split('.', 3); 
    let id = splitted[2];
     this.customerService.getCustomerData(id).subscribe(
       e => { e.applicationUser;
         console.log(e.applicationUser.fname);
          this.Editform = this.fb.group({
            address: e.applicationUser.address
          });
        }) 
  }
  OnSubmit() {
    // this.route.queryParams.subscribe(r => {
    //   console.log(r)
    //  this.token =  r.token ;
    //  this.email = r.email ;
    //  })
    // let data = {
    //   Token: this.token,
    //   Email: this.email,
    //   Address: this.resetform.get("Address")?.value,
    // }
    // console.log(data)
   
}
}

