import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BreakingProvider } from '../../providers/breaking/breaking';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public breakings = [];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public breaking: BreakingProvider
  ) {
  }

  allBreakings(){
    this.breaking.allBreakings()
    .subscribe(
      breakings =>this.breakings = breakings,
      error => this.errorMessage =<any>error
   
    )
  }

  ionViewDidLoad(){
    this.allBreakings();
  }

}
