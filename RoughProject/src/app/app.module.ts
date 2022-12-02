import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PhoneMaskDirective } from './Directive/phone-mask.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PhoneMaskDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    OverlayModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [PhoneMaskDirective],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
