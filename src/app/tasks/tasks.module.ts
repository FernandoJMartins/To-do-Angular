import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTaskComponent } from './listagem-task/listagem-task.component';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../shared/modules/material.module';
import { FormTaskComponent } from './form-task/form-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardTaskComponent } from './card-task/card-task.component';
import { LogoModule } from "../shared/components/logo/logo.module";
import { PesquisaTaskComponent } from './pesquisa-task/pesquisa-task.component';


@NgModule({
  declarations: [
    FormTaskComponent,
    ListagemTaskComponent,
    TasksComponent,
    CardTaskComponent,
    PesquisaTaskComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LogoModule
],
  exports: [
    TasksComponent,
    ListagemTaskComponent,
    FormTaskComponent,
    CardTaskComponent,

  ]
})
export class TasksModule { }
