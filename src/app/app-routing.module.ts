import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import {TasksComponent} from './tasks/tasks.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: CadastroComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: '',
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
