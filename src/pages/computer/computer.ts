import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';

/**
 * Generated class for the ComputerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computer',
  templateUrl: 'computer.html',
})
export class ComputerPage {
  public computers =[];
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
    this.lost.getComputer()
    .subscribe(
      computer => this.computers = computer,
      error =>this.errorMessage = <any>error
    )
  }

}
