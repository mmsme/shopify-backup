import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  Token: any;
  constructor(private http: HttpClient) { }
 
  readonly Url = 'http://localhost:23873/api/Authentication/';

  token:string=JSON.stringify(localStorage.getItem("token"));
       httpOptions={ headers:new HttpHeaders({
       'Authorization':JSON.parse(this.token)
     
       })
      }
      httpOptions2 = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
  postCustomerData(CustomerData: any) {
    return this.http.post(`${this.Url}register-customer`,CustomerData);
  }
   login(CustomerData: any) {
     return this.http.post<any>(`${this.Url}login`, CustomerData)
   }
  forgetpassword(email: any) {
    console.log(email);
    return this.http.get(`${this.Url}forget-password/${email}`)
  }
  resetpassword(resetpassword: any) {
    return this.http.post(`${this.Url}reset-password`, resetpassword)
  }

  postSellerData(CustomerData: any) {
    return this.http.post(`${this.Url}register-seller`,CustomerData);
  }
  
}
