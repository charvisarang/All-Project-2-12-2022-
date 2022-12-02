import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';


import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ModernComponent } from './modern/modern.component';
import { Modern1Component } from './modern/modern/modern1/modern1.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'features',
    component: FeaturesComponent
  },

  {
    path: 'modern',
    component: ModernComponent,
  },
  {
        path:'modern1',
        component:Modern1Component
  },
    
  
 {
  path:'about_us',
  component:AboutUsComponent
 },

  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
