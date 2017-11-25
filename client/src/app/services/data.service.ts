import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  getSteps(): Observable<any[]> {
    return this.http.get('assets/data/steps.json').map(steps => <any[]>steps);
  }
}
