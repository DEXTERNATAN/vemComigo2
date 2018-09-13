import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  private loginForm: FormGroup;
  submitAttempt = false;
  credentias: { email: any; password: any; };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  cadastrar() {
    this.credentias = { 'email': this.loginForm.value.email, 'password': this.loginForm.value.password };
    this.authService.createUser(this.credentias).then(
      data => {
        console.log(data);
      },
      error => console.log('Erro ao cadastrar usuário!')
    );
  }

  login() {
    this.submitAttempt = true;
    this.credentias = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.signWithEmail(this.credentias).then(
      () => {
        console.log('Logado');
      },
      error => console.log('Erros encontrados: ', error)
    );
  }
}

