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
  { title:'OurMenu', pic:'assets/img/soup1.jpg', pushPage: 'MenuPage'},
  { title:'Account', pic:'assets/img/coffee-people3.jpg', pushPage: 'AccountPage'},
  { title:'About Us', pic:'assets/img/coffee6.jpg', pushPage: 'AboutUs'},
  { title:'Locations', pic:'assets/img/cafe2.jpg', pushPage: 'LocationsPage'}
];
  constructor(public navCtrl: NavController, private post: PostProvider) {
  }

  ionViewDidLoad(){
    this.post.getPosts()
      .subscribe((data)=>{
      console.log(data);
      this.posts = data;
    });
  }

}
