import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the BreakingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Breaking {
  rno: string;
  name: string;
  semester: number;
  gender: string;
  mark: string;
  id?: string;
}
@Injectable()
export class BreakingProvider {
  private api: string = "http://localhost:8000/api/breakings";

  constructor(public http: HttpClient) {
    console.log('Hello BreakingProvider Provider');
  }

  allBreakings(): Observable<Breaking[]>{
    return this.http.get<Breaking[]>(this.api);
  }

  addBreaking(post: Breaking): Observable<any> {
    return this.http.post(this.api, post)
  }

  updateBreaking(post: Breaking): Observable<any> {
      return this.http.put(`${this.api}${post.id}`, post);
  }

  deleteBreaking(post: Breaking): Observable<any> {
      return this.http.delete(`${this.api}${post.id}`)
  }

}
