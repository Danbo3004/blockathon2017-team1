import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from '../models/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InternalHomeService extends HomeService {

  constructor(private http: HttpClient) {
    super();
  }

  getHomes(host: string): Observable<Home[]> {
    return this.http.get('assets/data/homes.json').map(homes => <Home[]>homes);
  }

  getHome(address: string): Observable<Home> {
    return this.http.get('assets/data/homes.json').map(homes => <Home>homes[0]);
  }

  newHome(data: any): Observable<Home> {
    return undefined;
  }

  updateHome(contractAddress: string, data: any): Observable<Home> {
    return undefined;
  }
}
