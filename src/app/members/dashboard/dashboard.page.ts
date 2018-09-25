import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public currentUser: any;
  // https://javebratt.com/ionic-firebase-tutorial-object/ -- referencia para implementacao
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      console.log(data);
      this.currentUser = data;
    });
  }

  listarUltimas() {
    this.router.navigateByUrl('members/listar');
  }

  buscarAjuda() {
    this.router.navigateByUrl('members/ajuda');
  }

  logout() {
    this.authService.logout();
  }

}
