import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './Pages/category-details/category-details.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { SearchPageComponent } from './Pages/Search-page/Search-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'search/:id', component: SearchPageComponent },
      { path: 'category/:id', component: CategoryDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
