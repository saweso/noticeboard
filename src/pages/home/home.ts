import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public posts = [];
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
