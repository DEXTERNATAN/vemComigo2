import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user.model';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: User[];
  credentias: { email: any; password: any };
  loading: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      content: 'Aguarde ...',
      // duration: 2000
    });
    return await this.loading.present();
  }

  async hideLoading() {
    return await this.loading.dismiss();
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Cadastro de usuário',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {

    // this.presentLoading();

    this.submitted = true;
    this.credentias = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };


    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService.signWithEmail(this.credentias).then(
        () => {
          console.log('Logado');
          // this.hideLoading();
        },
        error => {
          console.log('Erros encontrados: ', error.code);

          if (error.code == 'auth/wrong-password') {
            this.presentAlert('A senha é inválida ou o usuário não possui uma senha.');
          } else {
            this.presentAlert(error.message);
          }
          // this.hideLoading();
        }
      );
    }



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
