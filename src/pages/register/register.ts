import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('cpassword') cpassword;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    if (this.password.value == this.cpassword.value) {
      console.log("You just registered with " + this.username.value +", with password "+this.password.value);
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Your password wasnt correct!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
