import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  private loginForm: FormGroup;
  private loginError: string;
  submitAttempt = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    this.submitAttempt = true;
    console.log('Logado: ', this.loginForm.value);
  }

}

