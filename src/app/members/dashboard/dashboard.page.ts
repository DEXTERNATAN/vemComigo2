import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public currentUser: any;
  // https://javebratt.com/ionic-firebase-tutorial-object/ -- referencia para implementacao
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.currentUser = data.email;
    });
  }

  logout() {
    this.authService.logout();
  }

}
