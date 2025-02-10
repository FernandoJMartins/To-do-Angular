import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Task} from '../../shared/model/Task';

@Component({
  selector: 'app-listagem-task',
  standalone: false,
  templateUrl: './listagem-task.component.html',
  styleUrl: './listagem-task.component.css'
})
export class ListagemTaskComponent{
  @Input() tasks: Task[] = [];
  @Output() delete = new EventEmitter<Task>();

  constructor() { }

  onDelete(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.delete.emit(task);
  }
}
