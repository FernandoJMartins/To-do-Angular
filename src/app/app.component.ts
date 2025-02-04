import { Component } from '@angular/core';
import { Usuario } from '../shared/model/Usuario';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {listaUsuarios} from '../shared/model/listaUsuarios';
import {NgForOf} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MatCard,
    MatFormField,
    FormsModule,
    NgForOf,
    MatInput,
    MatButton,
    MatLabel,
    MatIconButton,
    MatIcon,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    CadastroUsuarioComponent,
    ListagemUsuarioComponent
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
}

