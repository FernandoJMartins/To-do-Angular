import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { MensagemSnackService } from '../../shared/services/snack.service';
import { Router, RouterLink } from '@angular/router';
import { saveUserData } from '../../utils/localStorage';

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
    private authService: AuthService,
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
      this.emailFormControl.value, this.passwordFormControl.value).subscribe(
        (login) => {
          this.snackService.sucesso('Login realizado com sucesso');
          saveUserData(login);
          this.router.navigate(['/tasks']);
        },
        (error) => {
          this.snackService.erro('Erro ao realizar login');
        }
    );
  }
}
