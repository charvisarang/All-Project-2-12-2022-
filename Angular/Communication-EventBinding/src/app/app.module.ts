import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ButtoneventComponent } from './buttonevent/buttonevent.component';

import { FormsModule } from '@angular/forms';
import { ChildownComponent } from './childown/childown.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
  
    ButtoneventComponent,
    ChildownComponent,
    HeaderComponent,
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
