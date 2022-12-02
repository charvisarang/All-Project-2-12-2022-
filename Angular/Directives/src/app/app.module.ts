import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

import { ModernComponent } from './modern/modern.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesChildComponent } from './features/features-child/features-child.component';
import { FormsModule } from '@angular/forms';
import { Modern1Component } from './modern/modern/modern1/modern1.component';




@NgModule({
  declarations: [
AppComponent,
HomeComponent,
FeaturesComponent,

ModernComponent,
 AboutUsComponent,
 FeaturesChildComponent,
 Modern1Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
