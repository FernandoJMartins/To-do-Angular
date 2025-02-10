import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsuarioModule} from './usuario/usuario.module';
import {MatButtonModule} from '@angular/material/button';
import {provideHttpClient} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from './shared/services/auth.service';
import { MensagemSnackService } from './shared/services/snack.service';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './shared/modules/material.module';
import { TaskService } from './shared/services/task.service';
import { TasksModule } from './tasks/tasks.module';
import { LogoModule } from './shared/components/logo/logo.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DialogModule } from './shared/components/dialog/dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    UsuarioModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
    TasksModule,
    LogoModule,
    FormsModule,
    DialogModule,
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    AuthService,
    MensagemSnackService,
    TaskService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
