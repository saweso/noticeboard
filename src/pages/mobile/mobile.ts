import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';

/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {
  public mobiles =[];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public lost: LostProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.atm();
  }

  atm(){
    this.lost.getMobile()
    .subscribe(
      mobile => this.mobiles = mobile,
      error =>this.errorMessage = <any>error
    )
  }

}
