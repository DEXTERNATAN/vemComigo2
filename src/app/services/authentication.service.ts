import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: Observable<firebase.User>;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private _firebaseAuth: AngularFireAuth,
    private _loadingCtrl: LoadingController
  ) {
    this.user = _firebaseAuth.authState;
    this.plt.ready().then(() => {
      this.checkToken();
    });
    
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  async presentLoading(op) {
    const loading = await this._loadingCtrl.create({
      content: 'Aguarde ...',
      duration: 2000
    });
    if(op === true) {
      return await loading.present();
    }else{
      return await loading.dismiss();
    }
      
  }

  signWithEmail(credentials) {
    this.presentLoading(true);
    return this._firebaseAuth.auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
          this.authenticationState.next(true);
          this.presentLoading(false);
        });
      });
  }

  signInWithGoogle() {
    this.presentLoading(true);
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(
      () => {
        this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
          this.authenticationState.next(true);
          this.presentLoading(false);
        });
        
      }
    );
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getProfile() {
    return this.user;
  }

}
