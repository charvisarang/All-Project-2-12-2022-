import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AysncComponent } from './aysnc/aysnc.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { ReplayComponent } from './replay/replay.component';
import { SubjectComponent } from './subject.component';

const routes: Routes = [
  { 
    path: '', 
    component: SubjectComponent,
    
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'behaviour',
      },
      {
        path:'behaviour',
        component:BehaviourComponent
      },
      {
        path:'replay',
        component:ReplayComponent
      },
      {
        path:'aysnc',
        component:AysncComponent
      }
    ]
   },
 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
