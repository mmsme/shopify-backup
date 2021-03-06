import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CategoryDetailsComponent } from './Pages/category-details/category-details.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { LoginComponent } from './Pages/login/login.component';
import { CustomerRegisterComponent } from './Pages/Register/customer-register/customer-register.component';
import { SearchPageComponent } from './Pages/Search-page/Search-page.component';

import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AccountOverviewComponent } from './Components/ProfileSideMenu/account-overview/account-overview.component';
import { AddressBookComponent } from './Components/ProfileSideMenu/address-book/address-book.component';
import { ChangePassComponent } from './Components/ProfileSideMenu/change-pass/change-pass.component';
import { DetailsComponent } from './Components/ProfileSideMenu/details/details.component';
import { InboxComponent } from './Components/ProfileSideMenu/inbox/inbox.component';
import { OrdersComponent } from './Components/ProfileSideMenu/orders/orders.component';
import { RecentlyViewedComponent } from './Components/ProfileSideMenu/recently-viewed/recently-viewed.component';
import { SavedItemsComponent } from './Components/ProfileSideMenu/saved-items/saved-items.component';

import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { AuthGuard } from './Services/Auth/auth.guard';
import { ShoppingCartComponent } from './Components/ShoppingCart/ShoppingCart.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  {
    path: 'customer',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'search/:id', component: SearchPageComponent },
      { path: 'category/:id', component: CategoryDetailsComponent },
      { path: 'productdetails/:id', component: ProductDetailsComponent },
      { path: 'cart', component: ShoppingCartComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
          { path: 'orders', component: OrdersComponent },
          { path: 'inbox', component: InboxComponent },
          { path: 'edit', component: DetailsComponent },
          { path: 'address', component: AddressBookComponent },
          { path: 'changepass', component: ChangePassComponent },
          { path: '**', component: AccountOverviewComponent },
        ],
      },
      {
        path: 'wishlist',
        component: SavedItemsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'history',
        component: RecentlyViewedComponent,
        canActivate: [AuthGuard],
      },
      // { path: 'notfound', component: NotFoundComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  // { path: 'seller-Register', component: SellerRegisterComponent },
  { path: 'customer-Register', component: CustomerRegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  //! wild card don't change it or i'll kill you
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
