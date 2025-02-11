import {Component, EventEmitter, input, Input, OnInit} from '@angular/core';
import {TaskService} from '../../shared/services/task.service';
import {getCurrentUserData} from '../../utils/localStorage';
import { Task } from '../../shared/model/Task';
import {TasksComponent} from '../tasks.component';

@Component({
  selector: 'app-pesquisa-task',
  standalone: false,
  templateUrl: './pesquisa-task.component.html',
  styleUrl: './pesquisa-task.component.css'
})
export class PesquisaTaskComponent {
  input : string = '';
  userId: number;
  @Input() tasks!: Array<Task>;
  isDropDownVisible : boolean = false;

  constructor(private tasksComponent : TasksComponent) {
    this.userId = getCurrentUserData().user.id;
  }

  search(input : string) {
    this.tasksComponent.getTasks(input);
  }

  changeVisibility() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}
