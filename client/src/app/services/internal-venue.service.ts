import { Injectable } from '@angular/core';
import { VenueService } from './venue.service';
import { Venue } from '../models/venue';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InternalVenueService extends VenueService {

  constructor(private http: HttpClient) {
    super();
  }

  getVenues(host: string): Observable<Venue[]> {
    return this.http.get('assets/data/venues.json').map(venues => <Venue[]>venues);
  }

  getVenue(address: string): Observable<Venue> {
    return this.http.get('assets/data/venues.json').map(venues => <Venue>venues[0]);
  }
}
