import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from '@ionic/angular';
import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public navCtrl: NavController, private route: Router) { }
 
  doLogin() {
    // this.navCtrl.setRoot('MenuPage');
    // this.navCtrl.goRoot('MenuPage');
    this.route.navigateByUrl('menuPage');
  }

}
