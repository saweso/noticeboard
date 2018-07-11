import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public posts = [];

menuData = [
  { title:'Breaking News', pic:'assets/img/breaking_news.png', pushPage: 'CountryPage'},
  { title:'Lost&Found', pic:'assets/img/lost_found.png', pushPage: 'LostPage'},
  { title:'Examinations', pic:'assets/img/examination.png', pushPage: 'ExaminationPage'},
  { title:'Events', pic:'assets/img/events.png', pushPage: 'EventsPage'},
  { title:'Sports', pic:'assets/img/sports.png', pushPage: 'SportsPage'},
  { title:'Important', pic:'assets/img/importance.png', pushPage: 'ImportantsPage'},
  { title:'Placement', pic:'assets/img/placement.png', pushPage: 'PlacementsPage'},
  { title:'General', pic:'assets/img/general.png', pushPage: 'GeneralPage'}
];

  constructor(public navCtrl: NavController, private post: PostProvider) {
  }

  ionViewDidLoad(){
    // this.post.getPosts()
    //   .subscribe((data)=>{
    //   console.log(data);
    //   this.posts = data;
    // });
  }

}
