import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  createSuccess = false;
  registerCredentials = { name: '', email: '', password: '', confirmation_password: '' };

  constructor() { }

  ngOnInit() {
  }

  public register() {

  }

  showPopup(title, text) {
    
  }

}
