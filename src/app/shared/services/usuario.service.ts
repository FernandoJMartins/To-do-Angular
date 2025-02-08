import { Injectable } from '@angular/core';
import {Usuario} from '../../../shared/model/Usuario';
import {listaUsuarios} from '../../../shared/model/listaUsuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios: Array<Usuario>;

  constructor() {
    this.listaUsuarios = listaUsuarios;
  }

  listar(): Array<Usuario> {
    return this.listaUsuarios;
  }

  inserir(Usuario: Usuario): void {
    this.listaUsuarios.push(Usuario);
  }
}
