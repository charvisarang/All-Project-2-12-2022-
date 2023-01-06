import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpformComponent } from './empform/empform.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import{FormsModule}from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { EmpserviceService } from './service/empservice.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmplistComponent,
    EmpformComponent,
    EmpdetailsComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule  
  ],
  exports:[
    EmpdetailsComponent,
    EmpformComponent,
    EmplistComponent
  ],
  providers:[
    EmpserviceService
  ]
})
export class EmployeeModule { }
