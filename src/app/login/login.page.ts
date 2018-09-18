import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {

  loginForm: FormGroup;
  submitAttempt = false;
  credentias: { email: any; password: any };

  user: Observable<firebase.User>;
  nome: string;
  email: string;
  senha: string;
  urlImagem: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    public afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {

    this.user = this.afAuth.authState;

    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

  }

  // NEW
  loginFacebook() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }

  loginEmail() {

    const credentials = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    console.log(credentials);
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(data => {
      console.log('Resultado: ', data);
    })
    .catch((erro: any) => {
      console.log(erro);
    });

  }

  createEmail() {
    const credentials = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then((res: any) => {
      console.log(res);
      const usuario = firebase.auth().currentUser;
      usuario.updateProfile({
        displayName: this.nome,
        photoURL: this.urlImagem
      });

    }).catch((erro: any) => {
      console.log(erro);
    });

  }

  CadastrarUsuario() {
    console.log('Teste');
    this.router.navigate(['/signup']);
  }

  logout() {
    console.log('Deslogando');
    this.afAuth.auth.signOut();
  }

  // OLD
  // loadCredentials() {
  //   this.credentias = {
  //     email: this.loginForm.value.email,
  //     password: this.loginForm.value.password
  //   };
  // }


  // login() {
  //   this.submitAttempt = true;
  //   this.loadCredentials();

  //   this.authService.signWithEmail(this.credentias).then(
  //     () => {
  //       console.log('Logado');
  //     },
  //     error => console.log('Erros encontrados: ', error)
  //   );
  // }

  // loginWithGoogle() {
  //   this.loadCredentials();
  //   console.log('Login com google');

  //   this.authService.signInWithGoogle(this.credentias).then(
  //     data => {
  //       // this.user = data;
  //       console.log('logado: ', data);
  //       this.user = data;
  //     },
  //     error => console.log('Erros encontrados: ', error)
  //   );

  // }

  // logout() {
  //   console.log('Saindo da aplicação do google');
  //   this.authService.logout();
  // }


}
