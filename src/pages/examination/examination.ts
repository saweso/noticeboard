import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the ExaminationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-examination',
  templateUrl: 'examination.html',
})
export class ExaminationPage {
  public examinations =[];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public event: EventProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getAll();
  }

  getAll(){
    this.event.getExams()
    .subscribe(
      examinations => this.examinations = examinations,
      error =>this.errorMessage = <any>error
    )
  }

}
