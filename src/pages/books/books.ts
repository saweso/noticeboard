import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {
  public books =[];
  errorMessage: any;

  constructor(
    public navCtrl: NavController, 
    public lost: LostProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.atm();
  }

  atm(){
    this.lost.getBooks()
    .subscribe(
      cards => this.books = cards,
      error =>this.errorMessage = <any>error
    )
  }

}
