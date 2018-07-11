import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

/**
 * Generated class for the CountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {
  countries: string[];
  errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public country: RestApiProvider
  ) {
  }

  getCountries(){
    this.country.getContries()
    .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage =<any>error
    )
  }


  ionViewDidLoad() {
    this.getCountries();
  }

}
