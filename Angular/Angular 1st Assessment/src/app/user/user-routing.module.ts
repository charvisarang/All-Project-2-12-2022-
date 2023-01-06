import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserformComponent } from './userform/userform.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'userform',
    pathMatch:'full'
  },
  { 
    path: '',
   component: UserComponent,
   children:[
    {
      path:'userform',
      component:UserformComponent
    },
    {
      path:'userlist',
      component:UserlistComponent
    }
   ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
