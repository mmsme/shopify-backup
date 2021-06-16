import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './Pages/demo/demo.component';
import { HomeComponent } from './Pages/Home/home/Home.component';
import { LandingComponent } from './Pages/Landing/Landing.component';
import { SearchPageComponent } from './Pages/Search-page/Search-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'demo', component: DemoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
