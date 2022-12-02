import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import{ReactiveFormsModule}from '@angular/forms';
import{FormsModule}from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { CrudModule } from './crud/crud.module';
import { Subject } from 'rxjs';
import { SubjectModule } from './subject/subject.module';
import { ModalcompComponent } from './modalcomp/modalcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PagenotfoundComponent,
    ModalcompComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    EmployeeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    CrudModule,
    SubjectModule,  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
