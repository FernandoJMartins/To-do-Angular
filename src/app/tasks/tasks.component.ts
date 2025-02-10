import { Component, OnInit } from '@angular/core';
import { getCurrentUserData, removeUserData } from '../utils/localStorage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormTaskComponent } from './form-task/form-task.component';
import { TaskService } from '../shared/services/task.service';
import { Task } from '../shared/model/Task';
import { MensagemSnackService } from '../shared/services/snack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks: Array<Task> = [];

  userId!: number;
  dialogRef!: MatDialogRef<FormTaskComponent>;


  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private snackService: MensagemSnackService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userId = getCurrentUserData().user.id;
    this.getTasks();

  }

  getTasks(): void {
    this.taskService.listar(this.userId).subscribe(
      (tasks) => {
        this.tasks = tasks;
    })
  }

  openNewTaskDialog(): void {
    const dialogRef = this.dialog.open(FormTaskComponent, {
      width: '30rem',
      data: { formTitle: 'Novo Afazer' },
    });

    dialogRef.componentInstance.submit.subscribe((formData: any) => {
      const data: Task = {
        titulo: formData.title,
        descricao: formData.text,
        prioridade: formData.priority,
        status: 'pendente',
        donoId: this.userId,
        dueDate: formData.dueDate,
        dataCriacao: new Date(),
        dataAlteracao: new Date(),
        removido: false,
      }

      this.taskService.inserir(data).subscribe(
        (task) => {
          this.snackService.sucesso('Afazer criado!');
          this.getTasks();
          dialogRef.close();
      },
      (error) => {
        this.snackService.erro('Erro ao tentar criar afazer.');
      });
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDelete(task: Task): void {
    this.taskService.remover(task).subscribe(
      () => {
        this.snackService.sucesso('Afazer removido!');
      },
      (error) => {
        this.snackService.erro('Erro ao tentar remover afazer.');
      }
    )
  }

  logout(): void {
    removeUserData();
    this.router.navigate(['/sign-in']);
  }
}
