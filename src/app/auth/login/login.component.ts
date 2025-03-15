import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MensagemSnackService } from '../../shared/services/snack.service';
import { Router } from '@angular/router';
import { saveUserData } from '../../utils/localStorage';
import { AuthFirebaseService } from '../../shared/services/auth-firebase/auth-firebase.service';
import { Login } from '../../shared/types/Login';


@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl: FormControl = new FormControl('', [Validators.required]);

  readonly loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl
  });

  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');

  constructor(
    private authService: AuthFirebaseService,
    private snackService: MensagemSnackService,
    private router: Router,
  ) { }

  updateErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      this.emailErrorMessage.set('Você precisa digitar um email.');
    } else if (this.emailFormControl.hasError('email')) {
      this.emailErrorMessage.set('Digite um email válido.');
    } else {
      this.emailErrorMessage.set('');
    }
  }

  trimFormValues() {
    this.emailFormControl.setValue(this.emailFormControl.value.trim());
    this.passwordFormControl.setValue(this.passwordFormControl.value.trim());

  }

  onBlur() {
    this.trimFormValues();

    if (this.passwordFormControl.hasError('required')) {
      this.passwordErrorMessage.set('Digite sua senha.');
    } else {
      this.passwordErrorMessage.set('');
    }
  }

  onSubmit() {
    this.authService.login(
      this.emailFormControl.value, this.passwordFormControl.value).then(
        (login: Login | null) => {
          this.snackService.sucesso('Login realizado com sucesso');
          if (login) {
            saveUserData(login);
          } else {
            this.snackService.erro('Erro ao realizar login');
          }
          this.router.navigate(['/tasks']);
        }).catch(
        (error: any) => {
          this.snackService.erro(error.message);
        }
    );
  }
}
