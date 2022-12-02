import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './product/product/adduser/adduser.component';
import { EditComponent } from './product/product/edit/edit.component';
import { ListComponent } from './product/product/list/list.component';
import { ProductComponent } from './product/product/product.component';
import { FormComponent } from './reactiveform/form/form.component';

import { ServicesComponent } from './services/services/services.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact_us',
    component:ContactUsComponent
  },
  {
    path:'product',
    component:ProductComponent,
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:'full'
      },
      {
        path:'list',
        component:ListComponent
      },
      {
        path:'edit',
        component:EditComponent
      },
      {
        path:'adduser',
        component:AdduserComponent
      }
    ]
  },
  {
    path:'services',
    component:ServicesComponent
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path:'reactiveform',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
