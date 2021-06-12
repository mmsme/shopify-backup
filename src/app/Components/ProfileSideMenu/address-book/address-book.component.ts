import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) { }
  token: any;
  email: any;
  resetform: FormGroup =new FormGroup({
    Address: new FormControl('',[Validators.required,])
  });
  ngOnInit(): void {
    
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

