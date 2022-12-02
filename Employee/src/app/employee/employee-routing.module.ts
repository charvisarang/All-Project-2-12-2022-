import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeresolverResolver } from '../shared/employeeresolver.resolver';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'employee-list',
        pathMatch: 'full'
      },
      {
        path: 'employee-form/:id',
        component: EmployeeFormComponent,
        resolve: { kuchbhi: EmployeeresolverResolver }
      },
      {
        path: 'employee-list',
        component: EmployeeListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
