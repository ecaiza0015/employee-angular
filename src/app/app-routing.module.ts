import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListActivityComponent} from './list-activity/list-activity.component';

import { LoginComponent } from './login/login.component';

import { DetailActivityComponent } from './detail-activity/detail-activity.component';
const routes: Routes = [
  { path: 'list/:id/:name/:lastName', component:ListActivityComponent},
  
  { path: '', component: LoginComponent },
  { path: 'list/:id/:name/:lastName', component: ListActivityComponent },
  { path: 'detail/:id', component: DetailActivityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
