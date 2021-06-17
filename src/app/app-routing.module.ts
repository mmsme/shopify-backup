import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { SearchPageComponent } from './Pages/Search-page/Search-page.component';
import { SubCategoryPageComponent } from './Pages/sub-category-page/sub-category-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'subcategory/:id', component: SubCategoryPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
