import { ProductContainerComponent } from './Components/Product/product-container/product-container.component';
import { ProductCardComponent } from './Components/Product/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/Navbar/navbarComponent/search/search.component';
import { SubNavbarComponent } from './Components/Navbar/navbarComponent/sub-navbar/sub-navbar.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { HomeComponent } from './Home/home/Home.component';
import { SideCartComponent } from './Components/Navbar/navbarComponent/side-cart/side-cart.component';
import { PromotionComponent } from './Home/Promotion/Promotion.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SubNavbarComponent,
    NavbarComponent,
    SideCartComponent,
    HomeComponent,
    PromotionComponent,
    ProductCardComponent,
    ProductContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    BarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
