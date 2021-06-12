import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductLayoutComponent } from './Components/Product/product-layout/product-layout.component';
import { AccountOverviewComponent } from './Components/ProfileSideMenu/account-overview/account-overview.component';
import { AddressBookComponent } from './Components/ProfileSideMenu/address-book/address-book.component';
import { ChangePassComponent } from './Components/ProfileSideMenu/change-pass/change-pass.component';
import { DetailsComponent } from './Components/ProfileSideMenu/details/details.component';
import { InboxComponent } from './Components/ProfileSideMenu/inbox/inbox.component';
import { OrdersComponent } from './Components/ProfileSideMenu/orders/orders.component';
import { RecentlyViewedComponent } from './Components/ProfileSideMenu/recently-viewed/recently-viewed.component';
import { SavedItemsComponent } from './Components/ProfileSideMenu/saved-items/saved-items.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ProductSubCategoryComponent } from './Pages/product-sub-category/product-sub-category.component';
import { ProductViewComponent } from './Pages/product-view/product-view.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { CustomerRegisterComponent } from './Pages/Register/customer-register/customer-register.component';
import { SellerRegisterComponent } from './Pages/Register/seller-register/seller-register.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: 'account-overview', component: AccountOverviewComponent },
      { path: "orders", component: OrdersComponent },
      { path: "inbox", component: InboxComponent },
      { path: "wishlist", component: SavedItemsComponent },
      { path: "edit", component: DetailsComponent },
      { path: "address", component: AddressBookComponent },
      { path: "changepass", component: ChangePassComponent },
      { path: '**',redirectTo:'account-overview' }, 
      
    ]
  },
  { path: "productdetails", component: ProductViewComponent },
  { path: "history", component: RecentlyViewedComponent },
  { path: "seller-Register", component: SellerRegisterComponent },
  { path: "customer-Register", component: CustomerRegisterComponent },
  { path: "cart", component: ShoppingCartComponent},
  { path: "profile", component: ProfileComponent },
  { path: "notfound", component: NotFoundComponent },
  { path: 'productsubcategory', component: ProductSubCategoryComponent },
  // { path: "productView", component: ProductViewContentComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent },
  { path: 'home', component: HomeComponent },
  {path: 'product-card-vertical', component: ProductLayoutComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
