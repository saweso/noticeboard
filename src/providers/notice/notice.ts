import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NoticeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const api: string ="http://localhost:8000/api/notices";
@Injectable()
export class NoticeProvider {

  constructor(public http: Http) {
    console.log('Hello NoticeProvider Provider');
  }

  getAll(){
    return this.http.get(api)
               .map(response => response.json());
  }

}
