import { Component } from '@angular/core';
import { Usuario } from '../shared/model/Usuario';
import {MatCard} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {listaUsuarios} from '../shared/model/listaUsuarios';
import {NgForOf} from '@angular/common';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MatCard,
    MatFormField,
    FormsModule,
    NgForOf,
    MatInput,
    MatButton
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-p4s';
  idNovoUsuario: number = 0;
  listaUsuarios: Usuario[] = listaUsuarios;
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  getNovoId(): number {
    return this.idNovoUsuario = this.listaUsuarios.length + 1;
  }

  cadastrar(): void {
    this.usuario.setId(this.getNovoId());
    this.listaUsuarios.push(this.usuario);
    this.usuario = new Usuario(); //apaga o texto dos input
  }
}

