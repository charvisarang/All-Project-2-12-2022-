import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/Components/home/home.component';
import { LoginComponent } from './core/Components/login/login.component';
import { RegisterComponent } from './core/Components/register/register.component';
import { RhythmComponent } from './core/Components/rhythm/rhythm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'rhythm',
    component: RhythmComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
