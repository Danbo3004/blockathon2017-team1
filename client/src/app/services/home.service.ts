import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Home } from '../models/home';

@Injectable()
export abstract class HomeService {

  constructor() { }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract newHome(data: any): Observable<Home>;

  public abstract updateHome(contractAddress: string, data: any): Observable<Home>;
}
