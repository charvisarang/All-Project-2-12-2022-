import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'customer-list',
    pathMatch:'full'
   },
  {
     path: '',
   component:CustomersComponent,
   

   children:[
    {
      path:'customer-list',
      component:CustomerListComponent
    },
    {
      path:'customer-form',
      component:CustomerFormComponent
    }
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
