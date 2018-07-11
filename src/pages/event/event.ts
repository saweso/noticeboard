import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  public events =[];
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
    this.event.getEvents()
    .subscribe(
      events => this.events = events,
      error =>this.errorMessage = <any>error
    )
  }

}
