import { getTestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppModule } from './../../app.module';
import { ProductService } from 'src/app/Services/Product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-Landing',
  templateUrl: './Landing.component.html',
  styleUrls: ['./Landing.component.scss'],
})
export class LandingComponent implements OnInit {
  totalPrice: number = 0;
  cartId: any;
  handler:any = null;
  strikeCheckout:any = null;
  to:any;

  constructor(public serviceProduct:ProductService , private HttpClient: HttpClient) {}

  ngOnInit() {
    this.stripePaymentGateway();
  }

  updateTotalPrice(event) {
    this.totalPrice = event;
  }

  GetCartId(event) {
    this.cartId = event;
  }

 /////////////////////////////Payment//////////////////////////////////////

  Checkout() {
    let address = localStorage.getItem("Address");
    console.log(JSON.parse(address))
  if(address!=null){
  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51J1HrQKYwUiSAlS8hkPMp3g32H4STaSlXuGzKL7JhYIKfXQt6Dge7x22TNTeCIdgamXPQFQLkA5DlFZ7ELLwjK9F009d0dqxfe',
    locale: 'auto',
    token: (token: any) => {
      let CheckoutData={
           "striptoken":token.id,
           "cartId":this.cartId,
           "governrateId":address
         }
        
         this.serviceProduct.MakeCheckout(CheckoutData).subscribe(f=>{
           alert('payment done')
           location.reload
         })
    }
  });
  handler.open({
    name: 'The Code Hubs',
    description: 'How to integrate with Stripe checkout',
    amount: this.totalPrice * 100
  });
}
else{
  alert("payment can't be done please check your address")
}
}

stripePaymentGateway() {
  if(!window.document.getElementById('stripe-script')) {
    const scr = window.document.createElement("script");
    scr.id = "stripe-script";
    scr.type = "text/javascript";
    scr.src = "https://checkout.stripe.com/checkout.js";

    scr.onload = () => {
      this.strikeCheckout = (<any>window).StripeCheckout.configure({
        key: 'pk_test_12239293949ksdfksdjkfj1232q3jkjssdfjk',
        locale: 'auto',
        token: function (token: any) {
         
        }
      });
    }
      
    window.document.body.appendChild(scr);
  }
}  
}