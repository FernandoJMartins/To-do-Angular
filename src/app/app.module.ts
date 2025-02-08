import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsuarioModule} from './usuario/usuario.module';
import {MatButton} from '@angular/material/button';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './shared/services/auth.service';
import { MensagemSnackService } from './shared/services/snack.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UsuarioModule,
    MatButton,
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    AppRoutingModule,

  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    AuthService,
    MensagemSnackService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
