import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { Home } from '../models/home';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConsumerService extends BaseService {
  public homes: Subject<Home []> = new Subject<Home []>();
  public homesAnnounce$ = this.homes.asObservable();
  
  constructor(http: Http) { 
    super(http);
  }

  searchHomes (key: string): Observable<Home []> {
    return this.doGet(`homes`).map(jsons => {
      if (!jsons || !jsons.length) {
        return [];
      }

      return jsons.map(json => new Home().fromJson(json));
    });
  }
}
