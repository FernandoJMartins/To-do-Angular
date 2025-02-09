import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/Usuario';
import {TaskService} from '../../shared/services/task.service';
import {Task} from '../../shared/model/Task';

@Component({
  selector: 'app-listagem-task',
  standalone: false,
  templateUrl: './listagem-task.component.html',
  styleUrl: './listagem-task.component.css'
})
export class ListagemTaskComponent implements OnInit{
  tasks: Array<Task> = [];


constructor(private taskService: TaskService) {
}

ngOnInit(): void {
  this.taskService.listar().subscribe(
    tasks => this.tasks = tasks
  )
}

public editar(usuario: Usuario): void {
  console.log('user alterado');
}

// public excluir(usuario :Usuario): void {
//   const indexToRemove = this.listaUsuarios.indexOf(usuario);
//   if (indexToRemove >= 0){
//   this.listaUsuarios.splice(indexToRemove, 1);
// }
}
