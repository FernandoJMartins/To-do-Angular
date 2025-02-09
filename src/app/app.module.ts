import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsuarioModule} from './usuario/usuario.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './shared/services/auth.service';
import { MensagemSnackService } from './shared/services/snack.service';
import { AuthModule } from './auth/auth.module';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { ListagemTaskComponent } from './tasks/listagem-task/listagem-task.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, CreateTaskComponent, ListagemTaskComponent],
  imports: [
    BrowserModule,
    FormsModule,
    UsuarioModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
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
