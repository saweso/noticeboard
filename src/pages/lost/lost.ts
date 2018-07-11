import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { AtmPage } from '../atm/atm';
import { ComputerPage } from '../computer/computer';
import { MobilePage } from '../mobile/mobile';
import { BooksPage } from '../books/books';
import { OthersPage } from '../others/others';

/**
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})
export class LostPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostPage');
  }
  card(){
    this.navCtrl.push(CardPage);
  }

  atm(){
    this.navCtrl.push(AtmPage);
  }

  computer(){
    this.navCtrl.push(ComputerPage);
  }

  mobile(){
    this.navCtrl.push(MobilePage);
  }

  books(){
    this.navCtrl.push(BooksPage);
  }

  others(){
    this.navCtrl.push(OthersPage);
  }
}
