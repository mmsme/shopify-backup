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
import { HttpClientModule } from '@angular/common/http';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { Ng5SliderModule } from 'ng5-slider';

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
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AccountOverviewComponent } from './Components/ProfileSideMenu/account-overview/account-overview.component';
import { AddressBookComponent } from './Components/ProfileSideMenu/address-book/address-book.component';
import { ChangePassComponent } from './Components/ProfileSideMenu/change-pass/change-pass.component';
import { DetailsComponent } from './Components/ProfileSideMenu/details/details.component';
import { InboxComponent } from './Components/ProfileSideMenu/inbox/inbox.component';
import { OrdersComponent } from './Components/ProfileSideMenu/orders/orders.component';
import { SavedItemsComponent } from './Components/ProfileSideMenu/saved-items/saved-items.component';
import { RecentlyViewedComponent } from './Components/ProfileSideMenu/recently-viewed/recently-viewed.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { LoginComponent } from './Pages/login/login.component';
import { CustomerRegisterComponent } from './Pages/Register/customer-register/customer-register.component';
import { SellerRegisterComponent } from './Pages/Register/seller-register/seller-register.component';
import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { CategoryDetailsComponent } from './Pages/category-details/category-details.component';
import { ShoppingCartComponent } from './Components/ShoppingCart/ShoppingCart.component';
import { ShoppingCartCardComponent } from './Components/ShoppingCart/shopping-cart-card/shopping-cart-card.component';

/**========================================================================
 *?                           My Services
 *========================================================================**/
import { CategoryService } from './Services/Category/category.service';
import { ProductService } from './Services/Product/product.service';
import { SubCategoryService } from './Services/SubCategory/SubCategory.service';
import { AddReviewComponent } from './Components/add-review/add-review.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ProductviewComponent } from './Pages/productview/productview.component';

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
    NotFoundComponent,
    AccountOverviewComponent,
    AddressBookComponent,
    ChangePassComponent,
    DetailsComponent,
    InboxComponent,
    OrdersComponent,
    SavedItemsComponent,
    RecentlyViewedComponent,
    ProfileComponent,
    LoginComponent,
    CustomerRegisterComponent,
    SellerRegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ProductDetailsComponent,
    CategoryDetailsComponent,
    ShoppingCartComponent,
    ShoppingCartCardComponent,
    AddReviewComponent,
    ProductviewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
    SocialLoginModule,
    MatCheckboxModule,
    Ng5SliderModule,
  ],
  providers: [
    ProductService,
    CategoryService,
    SubCategoryService,
   
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
               '772037916973-dssj5fiml0kf3phdkmqqm66d3ih9g614.apps.googleusercontent.com' // add web app client id
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('204373248201567'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
