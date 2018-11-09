import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  openLoginPage() {
    this.navCtrl.push(LoginPage)
  }
  
  openRegisterPage() {
    this.navCtrl.push(RegisterPage)
  }

  constructor(public navCtrl: NavController) {

  }
}
