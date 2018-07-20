import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TipoCadastroPage } from '../tipo-cadastro/tipo-cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goTotipoCadastro(){
    this.navCtrl.push(TipoCadastroPage);
  }

}
