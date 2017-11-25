import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { Home, HomeBooking } from '../models/home';
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
    return this.doGet('homes').map(jsons => {
      if (!jsons || !jsons.length) {
        return [];
      }

      return jsons.map(json => new Home().fromJson(json));
    });
  }

  getHomeByContractAddress(address: string): Observable<Home> {
    return this.doGet(`homes/${address}`).map (json => {
      if (!json) {
        return new Home();
      }

      return new Home().fromJson(json);
    });
  }

  getHomeTransactionList(homeAddress): Observable<HomeBooking []> {
    return this.doGet(`homes/${homeAddress}/booking`).map(jsons => {
      if (!jsons || !jsons.length) {
        return [];
      }

      return jsons.map(json => new HomeBooking().fromJson(json));
    });
  }

  getHostPlaces (addressOwner: string): Observable<Home []> {
    return this.doGet(`owners/${addressOwner}/homes`).map(jsons => {
      if (!jsons || !jsons.length) {
        return [];
      }

      return jsons.map(json => new Home().fromJson(json));
    });
  }
}
