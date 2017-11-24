import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from '../models/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class InternalHomeService extends HomeService {
  constructor(
    authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    super(authenticationService);
  }

  getHomes(host: string): Observable<Home[]> {
    return this.http.get('assets/data/homes.json').map(homes => <Home[]>homes);
  }

  getHome(address: string): Observable<Home> {
    return this.http.get('assets/data/homes.json').map(homes => <Home>homes[0]);
  }

  cacheHome(home: Home): Observable<Home> {
    return Observable.of(home);
  }
}
