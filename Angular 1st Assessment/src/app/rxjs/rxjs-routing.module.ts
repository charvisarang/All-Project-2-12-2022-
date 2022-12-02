import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { ObserverComponent } from './observer/observer.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsComponent,
    children: [
      {
        path: 'promise',
        component: PromiseComponent
      },
      
      {
        path: 'observer',
        component: ObserverComponent
      },
      {
        path:'async-await',
        component:AsyncAwaitComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
