import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import  {MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatLabel,
      MatCardModule,
      MatSnackBarModule,
      MatError,
      MatFormFieldModule,
      MatButtonModule,
      MatDialogModule,
      MatSelectModule,
      MatDatepickerModule,
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLabel,
    MatCardModule,
    MatSnackBarModule,
    MatError,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
  ]
})
export class MaterialModule { }
