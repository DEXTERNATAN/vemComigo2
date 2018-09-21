import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitAttempt = false;
  user: User[];
  credentias: { email: any; password: any };

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

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

  loginGoogle() {
    console.log('Cliquei no login com google');
    this.authService.signInWithGoogle().then(
      () => {
        console.log('Logado com google');
      }
    );
  }

  loginFacebook() {
    console.log('Cliquei no login com Facebook');
  }
}
