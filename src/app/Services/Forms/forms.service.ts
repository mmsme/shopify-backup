import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService implements HttpInterceptor {

  Token: any;
  constructor(private http: HttpClient) { }
 
  readonly Url = 'http://localhost:23873/api/Authentication/';
  token: string = JSON.stringify(localStorage.getItem("token"));
  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
   getToken() {
     if (this.loggedIn)
       return localStorage.getItem('token');
     else
       return 0;
  }
  intercept(req, next) {
    let tokenizedreq = req.clone({
      setHeaders: {
        Authorization: `${this.getToken()}`
      }
    })
    return next.handle(tokenizedreq)
  }
  httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  postCustomerData(CustomerData: any) {
    return this.http.post(`${this.Url}register-customer`,CustomerData);
  }
  getCustomerData(id: any) {
    return this.http.get<any>(`http://localhost:23873/api/Customer/041c44b2-7ee0-4514-87f9-17df04581eb0`);
  }
  EditCustomerData(id: any, data: any) {
    return this.http.put<any>(`${this.Url}Customer-/`+ id, data);
  }
  EditCustomerAddress(id: any, data:any) {
    return this.http.put<any>(`${this.Url}Customer-/`+ id, data);
  }
  EditCustomerPassword(id: any, data:any) {
    return this.http.put<any>(`${this.Url}Customer-`, id, data);
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
