import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDetails: firebase.User = null;
  user: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  signWithEmail(credentials) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then(
      res => {
        console.log('From Google');
        console.log(res);
      }
    )
  }

  signInWithFacebook(credentials) {
    return this._firebaseAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
  }


  signUp(credentials) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
    // return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.senha).then((res: any) => {
    //   console.log(res);
    //   const usuario = firebase.auth().currentUser;
    //   usuario.updateProfile({
    //     displayName: credentials.nome,
    //     photoURL: credentials.urlImagem
    //   });

    // }).catch((erro: any) => {
    //   console.log(erro);
    // });

  }

  isLoggedIn() {
    if ( this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    return this._firebaseAuth.auth.signOut().then((res) => console.log('Usuário deslogado'));
    // this.router.navigate(['/'])
  }

}
