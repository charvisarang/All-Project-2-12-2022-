import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable.component';
import { ListComponent } from './list/list.component';
import { FromeventComponent } from './fromevent/fromevent.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';



@NgModule({
  declarations: [
    ObservableComponent,
    ListComponent,
    FromeventComponent,
    IntervalComponent,
    OfFromComponent,
   
  ],
  imports: [
    CommonModule,
    ObservableRoutingModule
  ],
  exports:[
    ListComponent,
    FromeventComponent
  ]
})
export class ObservableModule { }
