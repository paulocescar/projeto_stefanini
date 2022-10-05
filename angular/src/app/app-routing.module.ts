import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';

const routes: Routes = [
  { path: "users", component: UsersListComponent },
  { path: "users/create", component: UsersFormComponent },
  { path: 'users/:id', component: UsersFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
