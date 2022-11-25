import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';

const routes: Routes = [
  {path:"",component:ToDoAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
