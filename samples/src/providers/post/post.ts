import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Notice } from '../../Models/Notice';

@Injectable()
export class PostProvider {

  private api: string ="http://localhost:8000/api/notices";

  constructor(public http: HttpClient) { }

  getPosts(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.api);
  }

  addPost(post: Notice): Observable<any> {
    return this.http.post(this.api, post)
  }

  updatePost(post: Notice): Observable<any> {
      return this.http.put(`${this.api}${post.id}`, post);
  }

  deletePost(post: Notice): Observable<any> {
      return this.http.delete(`${this.api}${post.id}`)
  }

}
