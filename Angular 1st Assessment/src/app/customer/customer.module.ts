import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerformComponent,
    CustomerdetailsComponent,
    CustomerlistComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CustomerformComponent,
    CustomerlistComponent,
    CustomerdetailsComponent
  ]
})
export class CustomerModule { }
