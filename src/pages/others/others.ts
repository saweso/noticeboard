import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';

/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {
  public others =[];
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
    this.lost.getOthers()
    .subscribe(
      mobile => this.others = mobile,
      error =>this.errorMessage = <any>error
    )
  }

}
