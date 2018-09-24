import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { LoadingController } from '@ionic/angular';


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
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController
  ) {
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  async presentLoading() {
    const loading = await this.loadingController.create({
      content: 'Aguarde ...',
      duration: 2000
    });
    return await loading.present();
  }



  login() {

    this.submitAttempt = true;
    this.credentias = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.presentLoading();

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
      },
      error => console.log('Erros agora google', error)
    );
  }

  loginFacebook() {
    console.log('Cliquei no login com Facebook');
  }

}
