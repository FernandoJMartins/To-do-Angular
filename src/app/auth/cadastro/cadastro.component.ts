import { Component, signal } from '@angular/core';
import { MensagemSnackService } from '../../shared/services/snack.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { saveUserData } from '../../utils/localStorage';
import { AuthFirebaseService } from '../../shared/services/auth-firebase/auth-firebase.service';
import { Login } from '../../shared/types/Login';


@Component({
  selector: 'app-cadastro',
  standalone: false,

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
    nomeFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
    emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

    readonly registerForm = new FormGroup({
      nome: this.nomeFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
  });

  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');
  nomeErrorMessage = signal('');

  constructor(
    private authService: AuthFirebaseService,
    private snackService: MensagemSnackService,
    private router: Router,
  ) { }

  emailUpdateErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      this.emailErrorMessage.set('Você precisa digitar um email.');
    } else if (this.emailFormControl.hasError('email')) {
      this.emailErrorMessage.set('Digite um email válido.');
    } else {
      this.emailErrorMessage.set('');
    }
  }

  trimFormValues() {
    this.nomeFormControl.setValue(this.nomeFormControl.value.trim());
    this.emailFormControl.setValue(this.emailFormControl.value.trim());
    this.passwordFormControl.setValue(this.passwordFormControl.value.trim());
  }

  passwordUpdateErrorMessage() {
    this.trimFormValues();

    if (this.passwordFormControl.hasError('required')) {
      this.passwordErrorMessage.set('Digite sua senha.');
    }
    else if (this.passwordFormControl.hasError('minlength')) {
      this.passwordErrorMessage.set('A senha deve ter no mínimo 5 caracteres.');}
    else {
      this.passwordErrorMessage.set('');
    }
  }

  nomeUpdateErrorMessage() {
    this.trimFormValues();
    if (this.nomeFormControl.hasError('required')) {
      this.nomeErrorMessage.set('Você precisa digitar um nome.');
    } else if (this.nomeFormControl.hasError('minlength')) {
      this.nomeErrorMessage.set('O nome deve ter no mínimo 5 caracteres.');
    } else {
      this.nomeErrorMessage.set('');
    }
  }

  onSubmit() {
    this.nomeFormControl.markAllAsTouched();
    if (this.registerForm.invalid) {
      return
    }

    this.authService.register(
      this.nomeFormControl.value!,
      this.emailFormControl.value!,
      this.passwordFormControl.value!,
    ).then((registerUser: Login | null) => {
        this.snackService.sucesso('Cadastro realizado com sucesso');
        if (registerUser) {
          if (registerUser.user) {
            saveUserData(registerUser);
          }
          else {
            this.snackService.erro('Ocorreu um erro ao realizar o cadastro, tente novamente.');
          }
        }
        this.router.navigate(['/tasks']);
      }).catch((error: any) => {
        this.snackService.erro(error.message);
      });
  }
}
