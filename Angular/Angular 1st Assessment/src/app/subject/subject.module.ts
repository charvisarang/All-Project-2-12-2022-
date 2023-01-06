import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { ReplayComponent } from './replay/replay.component';
import { AysncComponent } from './aysnc/aysnc.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    SubjectComponent,
    BehaviourComponent,
    ReplayComponent,
    AysncComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
 
  ],
  exports:[
    BehaviourComponent,
    ReplayComponent,
    AysncComponent
  ]
})
export class SubjectModule { }
