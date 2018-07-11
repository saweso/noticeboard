import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated
 *  *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
  public generals =[];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public event: EventProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.allEvents();
  }

  allEvents(){
    this.event.getGenerals()
    .subscribe(
      events => this.generals = events,
      error =>this.errorMessage = <any>error
    )
  }

}
