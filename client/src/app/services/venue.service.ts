import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Venue } from '../models/venue';

@Injectable()
export abstract class VenueService {

  constructor() { }

  public abstract getVenues(host: string): Observable<Venue[]>;

  public abstract getVenue(address: string): Observable<Venue>;
}
