import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Notice } from '../../Models/Notice';

/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class EventProvider {
  private event: string = "http://localhost:8000/api/events";
  private sport: string = "http://localhost:8000/api/examinations";
  private exam: string = "http://localhost:8000/api/sports";
  private important: string = "http://localhost:8000/api/importants";
  private general: string = "http://localhost:8000/api/generals";
  private placement: string = "http://localhost:8000/api/placements";

  constructor(public http: HttpClient) {
    console.log('Hello EventProvider Provider');
  }

  getEvents(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.event);
  }

  getSports(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.sport);
  }

  getExams(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.exam);
  }

  getImportants(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.important);
  }

  getGenerals(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.general);
  }
  
  getPlacements(): Observable<Notice[]>{
    return this.http.get<Notice[]>(this.placement);
  }

}
