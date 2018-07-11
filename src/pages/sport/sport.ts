import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html',
})
export class SportPage {

  public sports =[];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public sport: EventProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getAll();
  }

  getAll(){
    this.sport.getSports()
    .subscribe(
      sports => this.sports = sports,
      error =>this.errorMessage = <any>error
    )
  }
}
