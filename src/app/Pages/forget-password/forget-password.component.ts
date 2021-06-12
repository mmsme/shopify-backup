import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
 flag: any = 0;
  constructor(private customerService:FormsService) { }
  form: FormGroup = new FormGroup({
  "Email": new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  OnSubmit() {
    
    // var json = JSON.stringify(this.form.value);
    this.customerService.forgetpassword(this.form.value.Email).subscribe(
      a => {this.flag = 1;
        console.log(a)
      }
    )
}
}
