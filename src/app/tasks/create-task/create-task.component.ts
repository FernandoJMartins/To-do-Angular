import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {TaskService} from '../../shared/services/task.service';
import {Task} from '../../shared/model/Task';

@Component({
  selector: 'app-create-task',
  standalone: false,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  idNovaTask: number = 0;

  task: Task;
  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) {
      this.task = new Task();
      this.tasks = taskService.listar();
  }

  getNovoId(): number {
    // return this.idNovoUsuario = this.listaUsuarios.length + 1;
    return 1;
    //bug quando deleta usuario, pq usa o tamanho atual da lista para criar um novo id.
  }

  criar(): void {
    this.taskService.inserir(this.task).subscribe(
      taskHttp => console.log(taskHttp)
    );
    this.task = new Task();
  }
}


