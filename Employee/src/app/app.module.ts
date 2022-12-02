import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CurrencyPipe } from './share/currency.pipe';
import { EmployeeAdapter } from './employee/Adapter/employee-adapter';
import { DetailsComponent } from './details/details.component';





@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [EmployeeAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
