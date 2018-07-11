import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the ImportantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-important',
  templateUrl: 'important.html',
})
export class ImportantPage {
  public importants =[];
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
    this.sport.getImportants()
    .subscribe(
      sports => this.importants = sports,
      error =>this.errorMessage = <any>error
    )
  }

}
