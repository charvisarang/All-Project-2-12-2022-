import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneDirective } from '../Directive/phone.directive';
import { DatarefreshService } from '../shared/datarefresh.service';
import { EmployeeresolverResolver } from '../shared/employeeresolver.resolver';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShareModule } from '../share/share.module';
import { EmployeeAdapter } from './Adapter/employee-adapter';





@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    PhoneDirective,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    OverlayModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
    ShareModule
  ],

  providers: [
    DatarefreshService,
    EmployeeresolverResolver,
    EmployeeAdapter
  ]
})
export class EmployeeModule { }
