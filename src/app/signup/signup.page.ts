import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  users: User[];
  nav: NavController;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    private _userService: UserService,
    public loadingController: LoadingController,
    private router: Router
  ) {

    this.nav = navCtrl;

    this.signupForm = this.formBuilder.group({
      name: [''],
      username: [''],
      email: [''],
      password: [''],
    });
  }

  ngOnInit() { }

  onSubmit(user: any): void {
    console.log('Inserindo um novo registro');
    this._userService.createUsers(user);
    this.router.navigate(['contact']);
    // this.nav.goRoot('contact');
    // this.nav.goRoot(LoginPage);
  }


}
