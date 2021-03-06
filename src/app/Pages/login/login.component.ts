import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormsService } from 'src/app/Services/Forms/forms.service';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public showPassword: boolean | any;
   public showPassword1: boolean|any;
   public loggedIn: boolean|any;
   public user: SocialUser = new SocialUser;
   public error: string|any;
    constructor(private router: Router,private customerService:FormsService,private authService: SocialAuthService) { }
  ngOnInit() { 
     this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    console.log(this.user);
  });
  }
signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('SocialUser', JSON.stringify(data));
      this.router.navigateByUrl('/customer').then();
    });
}

  loginForm = new FormGroup({
    Email: new FormControl('',[ Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    ]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ]),
  });
  OnSubmit() {
    this.customerService.login(this.loginForm.value).subscribe(
      a => {
        localStorage.setItem("token", a.token),
          localStorage.setItem("email", a.email),
           this.router.navigate(["customer"]);
    },
     e => console.log(JSON.stringify( e)) 
    )
   }
signInHandler(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      localStorage.setItem('google_auth', JSON.stringify(data));
      this.router.navigateByUrl('/customer').then();
    });
  }

      
    }
    