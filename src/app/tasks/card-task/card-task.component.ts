import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../shared/model/Task';
import { TaskService } from '../../shared/services/task.service';
import { MensagemSnackService } from '../../shared/services/snack.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormTaskComponent } from '../form-task/form-task.component';
import { DialogComponent } from '../../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-card-task',
  standalone: false,

  templateUrl: './card-task.component.html',
  styleUrl: './card-task.component.css'
})
export class CardTaskComponent implements OnInit {

  @Input() task!: Task;

  @Output() dialogActionConfirm = new EventEmitter();
  @Output() deleteTask = new EventEmitter<Task>();

  cardColor: string = '!bg-white'

  dialogRef!: MatDialogRef<FormTaskComponent>;

  constructor(
    private taskService: TaskService,
    private snackService: MensagemSnackService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.setCardColor()
  }

  setCardColor(): void {
    switch (this.task.prioridade) {
      case 'alta':
        this.cardColor = '!bg-red-200';
        break;

      case 'media':
        this.cardColor = '!bg-orange-200';
        break;

      case 'baixa':
        this.cardColor = '!bg-yellow-100';
        break;

      case 'normal':
        this.cardColor = '!bg-white';
        break;
    }
  }

  toggleSwitch(): void {
    this.task.status = this.task.status === 'feito' ? 'pendente' : 'feito';
    this.atualizarTask();
  }

  atualizarTask(): void {
    this.taskService.atualizar(this.task).subscribe(
      () => {
        this.snackService.sucesso("Status atualizado!");
    },
      (error) => {
        this.snackService.erro("Erro ao atualizar status!");
      }
    )
    this.setCardColor();
  }

  openEditTaskDialog(): void {
    const dialogRef = this.dialog.open(FormTaskComponent, {
      width: '30rem',
      data: { formTitle: 'Atualizar Afazer', task: this.task },
    });

    dialogRef.componentInstance.submit.subscribe((formData: any) => {
      const data: Task = {
        id: this.task.id,
        titulo: formData.title,
        descricao: formData.text,
        prioridade: formData.priority,
        status: this.task.status,
        donoId: this.task.donoId,
        dueDate: formData.dueDate,
        dataCriacao: this.task.dataCriacao,
        dataAlteracao: new Date(),
        removido: this.task.removido,
      }
      this.task = { ...data };
      this.atualizarTask();
      dialogRef.close();
    });
  }

  openDeleteTaskDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30rem',
      data: {
        dialogTitle: 'Remover Afazer',
        dialogText: 'Deseja realmente remover este afazer?'
      },
    });

    dialogRef.componentInstance.dialogActionConfirm.subscribe(
      () => {
        this.deleteTask.emit(this.task);
        dialogRef.close();
      }
    );
  }
}
