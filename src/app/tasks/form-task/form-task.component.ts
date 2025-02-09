import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskPriority } from '../../shared/types/TaskPriority';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-form-task',
  standalone: false,

  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {

  @Input() formTitle!: string;
  @Output() submit = new EventEmitter();

  form: FormGroup = new FormGroup({});

  priorities: TaskPriority[] = [
    {value: 'baixa', viewValue: 'Baixa'},
    {value: 'normal', viewValue: 'Normal'},
    {value: 'media', viewValue: 'Média'},
    {value: 'alta', viewValue: 'Alta'},
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormTaskComponent>

  ) {
    this.formTitle = data.formTitle;
    this.form = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close()
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submit.emit(this.form.value);
  }
}
