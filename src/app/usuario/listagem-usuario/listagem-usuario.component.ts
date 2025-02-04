import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {listaUsuarios} from '../../../shared/model/listaUsuarios';

@Component({
  selector: 'app-listagem-usuario',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.css'
})
export class ListagemUsuarioComponent {

  protected readonly listaUsuarios = listaUsuarios;
}
