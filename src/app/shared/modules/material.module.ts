import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatLabel,
      MatButton,
      MatCardModule,
      MatSnackBarModule,
      MatError,

  ],
  exports: [
    MatFormFieldModule,
    MatButton,
    MatIconModule,
    MatInputModule,
    MatLabel,
    MatCardModule,
    MatSnackBarModule,
    MatError,
  ]
})
export class MaterialModule { }
