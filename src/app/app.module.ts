import { MatTabsModule } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';

/**========================================================================
 *?                           My Components
 *========================================================================**/

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

import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
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
import { ProductViewComponent } from './Pages/product-view/product-view.component';
import { ProductSubCategoryComponent } from './Pages/product-sub-category/product-sub-category.component';
/**========================================================================
 *?                           My Services
 *========================================================================**/
import { CategoryService } from './Services/Category/category.service';
import { ProductService } from './Services/Product/product.service';

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
    CategoriesComponent,
    CategoryCardComponent,
    FooterComponent,
    ProductCardVerticalComponent,
    ProductLayoutComponent,
    ShoppingCartComponent,
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
    ProductViewComponent,
    ProductSubCategoryComponent,
  ],
  imports: [
    BrowserModule,
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
    SocialLoginModule
  ],
  providers: [ProductService, CategoryService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '38322060992-tn7u0jd3d66sh4l68djtaa96k447rjbe.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('204373248201567')
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
