import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../shared/modules/material.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoModule } from "../shared/components/logo/logo.module";



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterLink,
    LogoModule,
]
})
export class AuthModule { }
