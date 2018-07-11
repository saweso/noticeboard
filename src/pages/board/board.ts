import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExaminationPage } from '../examination/examination';
import { LostPage } from '../lost/lost';
import { EventPage } from '../event/event';
import { SportPage } from '../sport/sport';
import { ImportantPage } from '../important/important';
import { GeneralPage } from '../general/general';
import { PlacementPage } from '../placement/placement';

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-board',
  templateUrl: 'board.html',
})
export class BoardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

  lost(){
    this.navCtrl.push(LostPage);
  }

  exam(){
    this.navCtrl.push(ExaminationPage);
  }

  event(){
    this.navCtrl.push(EventPage);
  }

  sport(){
    this.navCtrl.push(SportPage);
  }

  important(){
    this.navCtrl.push(ImportantPage);
  }

  general(){
    this.navCtrl.push(GeneralPage);
  }

  placement(){
    this.navCtrl.push(PlacementPage);
  }

}
