import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Usuario} from '../../shared/model/Usuario';
import {MatButton} from '@angular/material/button';
import {UsuarioService} from '../../shared/services/usuario.service';


@Component({
  selector: 'app-listagem-usuario',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCardActions,
    MatButton
  ],
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.css'
})
export class ListagemUsuarioComponent implements OnInit {

  listaUsuarios: Array<Usuario> = [];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
      this.usuarioService.listar().subscribe(
        listaUsuarios => this.listaUsuarios = listaUsuarios
      )
  }

  public editar(usuario: Usuario): void {  //desnecessario
    console.log('user alterado');
  }

  public excluir(usuario :Usuario): void {  //outra funcao nescessaria
    const indexToRemove = this.listaUsuarios.indexOf(usuario);
    if (indexToRemove >= 0){
      this.listaUsuarios.splice(indexToRemove, 1);
    }
  }
}
