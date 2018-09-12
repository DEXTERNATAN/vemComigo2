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
  private loginError: string;
  submitAttempt = false;
  credentias: { email: any; password: any; };

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    this.submitAttempt = true;
    console.log('Logado: ', this.loginForm.value);
    // this.router.navigate(['contact']);
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

