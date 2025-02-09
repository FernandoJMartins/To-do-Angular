import { Component, inject, OnInit, signal } from '@angular/core';
import { getCurrentUserData } from '../utils/localStorage';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormTaskComponent } from './form-task/form-task.component';
import { TaskService } from '../shared/services/task.service';
import { Task } from '../shared/model/Task';
import { MensagemSnackService } from '../shared/services/snack.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  userId!: number;
  dialogRef!: MatDialogRef<FormTaskComponent>;


  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private snackService: MensagemSnackService
  ) {}

  ngOnInit(): void {
    this.userId = getCurrentUserData().user.id;
  }

  openNewTaskDialog(): void {
    const dialogRef = this.dialog.open(FormTaskComponent, {
      width: '30rem',
      data: { formTitle: 'Novo Afazer' },
    });

    dialogRef.componentInstance.submit.subscribe((formData: any) => {
      console.log('Form submitted with data:', formData);

      const data: Task = {
        titulo: formData.title,
        descricao: formData.text,
        prioridade: formData.priority,
        status: 'pendente',
        donoId: this.userId,
        dueDate: formData.dueDate,
        dataCriacao: new Date(),
        dataAlteracao: new Date(),
      }

      this.taskService.inserir(data).subscribe(
        (task) => {
          this.snackService.sucesso('Afazer criado!');
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
    console.log("opa")
    this.dialogRef.close();
  }


}
