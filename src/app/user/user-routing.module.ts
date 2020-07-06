import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { LoginComponent } from './login.component';
import {StudentComponent} from './student.component';

const routes: Routes = [
  { path: 'register', component: UserComponent },
  { path: '', redirectTo: 'register'},
  {path:'login',component:LoginComponent},
  {path:'student',component:StudentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
