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

  constructor(private route: ActivatedRoute,private customerService:FormsService,private router: Router) { }
  token: any;
  email: any;
  resetform: FormGroup =new FormGroup({
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
  
    ]),
    CPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
  
    ]),
  });;
  ngOnInit(): void {
    
  }
  OnSubmit() {
    this.route.queryParams.subscribe(r => {
      console.log(r)
      this.token = r.token;
      this.email = r.email;
    })
    let data = {
      Token: this.token,
      Email: this.email,
      Password: this.resetform.get("Password")?.value,
      CPassword: this.resetform.get("CPassword")?.value
    }
    console.log(data)
    this.customerService.resetpassword(data).subscribe(
      a => {
        alert("Your Password Changed Successfully")
        this.router.navigate([""]);
      }
    )
   
  }
}

