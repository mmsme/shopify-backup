import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

/**========================================================================
 *?                           My Components
 *========================================================================**/
import { LandingComponent } from './Pages/Landing/Landing.component';
import { SearchComponent } from './Components/Navbar/navbarComponent/search/search.component';
import { SubNavbarComponent } from './Components/Navbar/navbarComponent/sub-navbar/sub-navbar.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { SideCartComponent } from './Components/Navbar/navbarComponent/side-cart/side-cart.component';
import { PromotionComponent } from './Pages/Home/Promotion/Promotion.component';
import { CategoriesComponent } from './Pages/Home/Categories/Categories.component';
import { ProductContainerComponent } from './Components/Product/product-container/product-container.component';
import { ProductCardComponent } from './Components/Product/product-card/product-card.component';
import { CategoryCardComponent } from './Pages/Home/Categories/category-card/category-card.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { ProductCardVerticalComponent } from './Components/Product/product-card-vertical/product-card-vertical.component';
import { ProductLayoutComponent } from './Components/Product/product-layout/product-layout.component';
import { SearchPageComponent } from './Pages/Search-page/Search-page.component';
import { FilterComponent } from './Components/Filter/Filter.component';

/**========================================================================
 *?                           My Services
 *========================================================================**/
import { CategoryService } from './Services/Category/category.service';
import { ProductService } from './Services/Product/product.service';
import { DemoComponent } from './Pages/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LandingComponent,
    SubNavbarComponent,
    NavbarComponent,
    SideCartComponent,
    HomeComponent,
    PromotionComponent,
    ProductCardComponent,
    ProductContainerComponent,
    CategoriesComponent,
    CategoryCardComponent,
    FooterComponent,
    ProductCardVerticalComponent,
    ProductLayoutComponent,
    SearchPageComponent,
    FilterComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    BarRatingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatRadioModule,
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
