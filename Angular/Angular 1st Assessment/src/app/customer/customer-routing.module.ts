import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo:'customerform'
      },
      {
        path: 'customerform',
        component: CustomerformComponent
      },
      {
        path: 'customerlist',
        component: CustomerlistComponent
      },
      {
        path:'edit/:id',
        component:CustomerformComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
