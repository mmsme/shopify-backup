import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Navbar/navbarComponent/search/search.component';
import { SubNavbarComponent } from './Navbar/navbarComponent/sub-navbar/sub-navbar.component';
import { NavbarComponent } from './Navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SubNavbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
