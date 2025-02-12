import {Component, ElementRef, EventEmitter, HostListener, input, Input, OnInit} from '@angular/core';
import {TaskService} from '../../shared/services/task.service';
import {getCurrentUserData} from '../../utils/localStorage';
import { Task } from '../../shared/model/Task';
import {TasksComponent} from '../tasks.component';
import {indexOf} from 'json-server-auth';

@Component({
  selector: 'app-pesquisa-task',
  standalone: false,
  templateUrl: './pesquisa-task.component.html',
  styleUrl: './pesquisa-task.component.css'
})
export class PesquisaTaskComponent {
  input : string = '';
  arrayCheckboxes: string[] = [];
  userId: number;
  @Input() tasks!: Array<Task>;
  isDropDownVisible : boolean = false;

  constructor(private tasksComponent : TasksComponent, private e: ElementRef) {
    this.userId = getCurrentUserData().user.id;
  }

  search(input : string = '', arrayCheckboxes: string[] = []) {
    this.tasksComponent.getTasks(input, arrayCheckboxes);
  }

  changeVisibility() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }

  //fecha o dropdown quando o evento (click) for acionado em qualquer outro elemento da página
  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.e.nativeElement.contains(event.target)) {
      this.isDropDownVisible = false;
    }
  }

  toggleCheckbox(value: string, event: Event) :void {
    if ((event.target as HTMLInputElement).checked) {
      if(!this.arrayCheckboxes.includes(value)) {
        this.arrayCheckboxes.push(value);
        console.log(this.arrayCheckboxes);
      }
    }
    else{
      this.arrayCheckboxes = this.arrayCheckboxes.filter((c) => c !== value)
    }
    this.search(this.input, this.arrayCheckboxes);
  }

}
