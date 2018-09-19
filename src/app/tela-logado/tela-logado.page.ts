import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tela-logado',
  templateUrl: './tela-logado.page.html',
  styleUrls: ['./tela-logado.page.scss'],
})
export class TelaLogadoPage implements OnInit {

  tab1Root: any = 'Tab1Page';
  myIndex: number;

  constructor(navParams: NavParams) { 
    /// this.myIndex = navParams.data.tabIndex || 0;
  }

  ngOnInit() {
  }

}
