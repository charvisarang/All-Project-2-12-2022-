import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { CrudformComponent } from './crudform/crudform.component';
import { CrudlistComponent } from './crudlist/crudlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crudform',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CrudComponent,
    children: [
      {
        path: 'crudform',
        component: CrudformComponent
      },
      {
        path: 'crudlist',
        component: CrudlistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
