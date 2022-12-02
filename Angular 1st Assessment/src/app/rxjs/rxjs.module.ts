import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { RxjsComponent } from './rxjs.component';
import { PromiseComponent } from './promise/promise.component';


import { ObserverComponent } from './observer/observer.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';


@NgModule({
  declarations: [
    RxjsComponent,
    
   PromiseComponent,
    ObserverComponent,
    AsyncAwaitComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ],
 exports:[
  PromiseComponent,
  
  ObserverComponent
 ]
  
})
export class RxjsModule { }
