import { Component } from '@angular/core';
import { Usuario } from '../shared/model/usuario';
import {MatCard} from '@angular/material/card';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {listaUsuarios} from '../shared/model/listaUsuarios';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    MatCard,
    MatFormField,
    FormsModule,
    NgForOf
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-p4s';
  listaUsuarios: Usuario[] = listaUsuarios;
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  cadastrar(): void {
    this.listaUsuarios.push(this.usuario);
    this.usuario = new Usuario();
    console.log(this.listaUsuarios);
  }

}
