import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';

/**
 * Generated class for the AtmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atm',
  templateUrl: 'atm.html',
})
export class AtmPage {

  public atms =[];
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
    this.lost.getAtm()
    .subscribe(
      cards => this.atms = cards,
      error =>this.errorMessage = <any>error
    )
  }

}
