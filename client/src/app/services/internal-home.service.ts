import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from '../models/home';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Web3Service } from './web3.service';

@Injectable()
export class InternalHomeService extends HomeService {
  constructor(
    web3Service: Web3Service,
    authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    super(web3Service, authenticationService);
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
