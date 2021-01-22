import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListActivityComponent} from './list-activity/list-activity.component';

const routes: Routes = [
  { path: 'list/:id/:name/:lastName', component:ListActivityComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
