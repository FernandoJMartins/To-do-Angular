import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListagemTaskComponent } from './listagem-task/listagem-task.component';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../shared/modules/material.module';



@NgModule({
  declarations: [
    CreateTaskComponent,
    ListagemTaskComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TasksComponent,
    CreateTaskComponent,
    ListagemTaskComponent
  ]
})
export class TasksModule { }
