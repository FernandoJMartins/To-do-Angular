import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import {Task} from '../../shared/model/Task';
import { TaskService } from '../../shared/services/task.service';

@Component({
  selector: 'app-listagem-task',
  standalone: false,
  templateUrl: './listagem-task.component.html',
  styleUrl: './listagem-task.component.css'
})
export class ListagemTaskComponent implements OnInit{
  @Input() tasks: Task[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
