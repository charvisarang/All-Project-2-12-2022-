import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './product/edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdduserComponent } from './product/adduser/adduser.component';
import { ListComponent } from './product/list/list.component';



@NgModule({
  declarations: [
    ProductComponent,
    EditComponent,
    AdduserComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
   
  ],
  exports:[
    ProductComponent
   
  ]
})
export class ProductModule { }
