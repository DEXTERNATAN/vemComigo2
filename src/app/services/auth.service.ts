import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  signWithEmail(credentials) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(credentials.email,
      credentials.password);
    // return this._firebaseAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).catch(function(error) {
    //   let errorCode = error.code;
    //   let errorMessage = error.message;
    // });
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    if ( this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    return this._firebaseAuth.auth.signOut().then((res) => this.router.navigate(['/']));
  }

}
