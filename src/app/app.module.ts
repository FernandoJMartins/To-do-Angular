import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsuarioModule} from './usuario/usuario.module';
import {MatButton} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent], // Aqui declaramos o componente
  imports: [
    BrowserModule,
    UsuarioModule,
    MatButton,
    HttpClientModule,
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    BrowserModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
