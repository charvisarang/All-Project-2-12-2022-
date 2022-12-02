import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpformComponent } from './empform/empform.component';

import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empform',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EmployeeComponent,

    children: [
      {
        path: 'empform',
        component: EmpformComponent
      },
      {
        path: 'empdetails',
        component: EmpdetailsComponent   
      },
      {
        path:'edit/:id',
        component:EmpformComponent
      }
     
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
