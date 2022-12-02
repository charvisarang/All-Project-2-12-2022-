import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './component/table/table.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TableComponent,
    
  ]
})
export class SharedModule { }
