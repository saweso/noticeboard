import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the PlacementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placement',
  templateUrl: 'placement.html',
})
export class PlacementPage {

  public placements =[];
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
      placements => this.placements = placements,
      error =>this.errorMessage = <any>error
    )
  }
}
