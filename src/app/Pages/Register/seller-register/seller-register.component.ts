import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
  
export class SellerRegisterComponent implements OnInit {
    public showPassword: boolean | any;
   public showPassword1: boolean|any;
  fileName1 = "Upload copy of the ID card";
  fileName2 = "Upload copy of the Tax Cart";
  fileName3 = "Upload the Contract";
  fileName4 = "Upload copy of the Commercial Register";
  imageUrl1: string|any;imageUrl2: string|any;imageUrl3: string|any;
  step: any = 1;
  selectedFiles:Array <string> =[];
  Idcard: any; taxcard: any; cont: any;
  CommercialRegister: any;
  fileUrl: any;
  constructor(public sellerservice:FormsService, private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  IDCard(event: any) {
    this.Idcard = <File>event.target.files[0];
    this.fileName1 = event.target.files[0].name;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any) => {
      this.imageUrl1 = event.target.result;
    }
  }
TaxCard(event:any) {
  this.taxcard = <File>event.target.files[0];
     this.fileName2 = event.target.files[0].name; var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any) => {
      this.imageUrl2 = event.target.result;
  }
}
  contract(event:any) {
    this.cont = <File>event.target.files[0];
    this.fileName3 = event.target.files[0].name;
  }
  commercialregister(event:any) {
    this.CommercialRegister = <File>event.target.files[0];
    this.fileName4 = event.target.files[0].name;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any) => {
      this.imageUrl3 = event.target.result;
    }
  }
  // download(): Observable<Blob> {
  //   return this.http.get("http://localhost:23873/files/contract/contract.pdf", {
  //     responseType: 'blob'
  //   })
  // }
  Registerform = new FormGroup({
     
    Fname: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    Lname:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
     ]),
    StoreName: new FormControl('', Validators.required),
    PhoneNumber:new FormControl('', Validators.required),
    Address :new FormControl('',Validators.required),
    Email: new FormControl('',[
      Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),

    ]),
  });
  OnSubmit() {
     let form = new FormData();
    form.append('Fname', this.Registerform.value.Fname);
    form.append('Lname', this.Registerform.value.Lname);
    form.append('PhoneNumber', this.Registerform.value.PhoneNumber);
    form.append('Address', this.Registerform.value.Address);
    form.append('StoreName',this.Registerform.value.StoreName);
    form.append('Password',this.Registerform.value.Password);
    form.append('Email', this.Registerform.value.Email);
    form.append('files', this.cont)
    form.append('files',this.Idcard)
    form.append('files',this.taxcard)
    form.append('files',this.CommercialRegister)
    
    if (this.step == 2) {
      this.sellerservice.postSellerData(form).subscribe(
        result => {
          console.log("sssssss", form)
          alert("your data Saved Successfuly");
          this.router.navigate(['']);
        })
    }
    }

  next() {
     this.step = this.step + 1;
  }
  prev() {
    this.step--;
  }
 downloadFile(){
    const link = document.createElement('a');
   link.setAttribute('type', 'hidden');
link.href = 'assets/contract.pdf';
link.download = "";
document.body.appendChild(link);
link.click();
link.remove();

  }
}

