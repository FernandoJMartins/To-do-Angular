import { Component, signal } from '@angular/core';
import { MensagemSnackService } from '../../shared/services/snack.service';
import { AuthService } from '../../shared/services/auth.service';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: false,

  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
    nomeFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
    emailFormControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordFormControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);

    readonly loginForm = new FormGroup({
      nome: this.nomeFormControl,
      email: this.emailFormControl,
      password: this.passwordFormControl
  });

  emailErrorMessage = signal('');
  passwordErrorMessage = signal('');
  nomeErrorMessage = signal('');

  constructor(
    private authService: AuthService,
    private snackService: MensagemSnackService
  ) {
    merge(
      this.emailFormControl.statusChanges,
      this.emailFormControl.valueChanges
    )
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
  }

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
    // TODO: fix trocar para cadastro
  //   this.authService.login(
  //     this.emailFormControl.value, this.passwordFormControl.value).subscribe(
  //       (login) => {
  //         this.snackService.sucesso('Login realizado com sucesso');
  //         localStorage.setItem('accessToken', login.accessToken);
  //         localStorage.setItem('userId', String(login.user.id));
  //       },
  //       (error) => {
  //         this.snackService.erro('Erro ao realizar login');
  //       }
  //   );
  // }
}
