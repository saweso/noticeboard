import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage} from '../home/home';
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
  reg = {
    email: '',
    password: '',
    password_confirmation: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  displayAlert(alertTitle, alertSub){
    let theAlert = this.alertCtrl.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ['OK']
    });
    theAlert.present();
  }

  registerAccount(){
    if(this.reg.password != this.reg.password_confirmation){
      this.displayAlert('Password Problem!', 'Passwords do not match, please try again');
      this.reg.password = '';
      this.reg.password_confirmation = '';
    }
    else{
      //register user
    }
  }

  regSuccess(result){
    this.displayAlert(result.email, 'Account created for this email address');
  }

}
