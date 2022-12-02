import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDatepickerInput, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './Components/home/home.component';
import { RhythmComponent } from './Components/rhythm/rhythm.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import {AnimationModule} from '@angular/animations'




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RhythmComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    CommonModule,
    OverlayModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ],
})
export class CoreModule { }
