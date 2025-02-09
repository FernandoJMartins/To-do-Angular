import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemTaskComponent } from './listagem-task/listagem-task.component';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../shared/modules/material.module';
import { FormTaskComponent } from './form-task/form-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormTaskComponent,
    ListagemTaskComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    TasksComponent,
    ListagemTaskComponent,
    FormTaskComponent,
  ]
})
export class TasksModule { }
