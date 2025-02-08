import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {Usuario} from '../../shared/model/Usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [
    FormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit {
  idNovoUsuario: number = 0;

  usuario: Usuario;
  listaUsuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.listaUsuarios = usuarioService.listar();
  }
  ngOnInit(): void {
        this.usuario = new Usuario();
  }

  getNovoId(): number {
    // return this.idNovoUsuario = this.listaUsuarios.length + 1;
    return 1;
    //bug quando deleta usuario, pq usa o tamanho atual da lista para criar um novo id.
  }

  cadastrar(): void {
        this.usuarioService.inserir(this.usuario).subscribe(
          usuarioHttp => console.log(usuarioHttp)
        );
        this.usuario = new Usuario(); //apaga o texto dos input
      }
    }
