import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Lost } from '../../Models/Lost';


@Injectable()
export class LostProvider {

  private card: string = "http://localhost:8000/api/card";
  private atm: string = "http://localhost:8000/api/atm";
  private computer: string = "http://localhost:8000/api/computer";
  private mobile: string = "http://localhost:8000/api/mobile";
  private books: string = "http://localhost:8000/api/books";
  private others: string = "http://localhost:8000/api/others";

  constructor(public http: HttpClient) {
    console.log('Hello EventProvider Provider');
  }

  getCard(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.card);
  }

  getAtm(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.atm);
  }

  getComputer(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.computer);
  }

  getMobile(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.mobile);
  }

  getBooks(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.books);
  }
  
  getOthers(): Observable<Lost[]>{
    return this.http.get<Lost[]>(this.others);
  }

}
