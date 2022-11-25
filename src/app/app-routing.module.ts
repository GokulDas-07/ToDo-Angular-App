import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoViewComponent } from './to-do-view/to-do-view.component';

const routes: Routes = [
  {path:"",component:ToDoAddComponent},
  {path:"view",component:ToDoViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
