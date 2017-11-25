import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {
  protected _http: Http;
  private _tokenKey: string;
  protected domain: string = environment.APIRoute;

  constructor(private http: Http) {
    this._http = http;
  }

  private createHeader(type: string = '') {
    let contentType: string = '';
    let headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      'Access-Control-Allow-Credentials': 'true'
    });

    switch (type) {
      case '':
      case 'json':
        contentType = 'application/json';
        break;
      case 'text':
        contentType = 'text/plain';
        break;
      case 'authentication':
        contentType = 'application/x-www-form-urlencoded';
        break;
      case 'file':
        contentType = '';
        break;
    }

    if (contentType.length > 0) {
      headers.append('Content-Type', contentType);
    }

    return headers;
  }

  protected doGet(apiUrl: string, params?: string): Observable<any> {
    let header: Headers;
    header = this.createHeader();

    var url = (params === undefined) ? `${this.domain}/${apiUrl}` : `${this.domain}/${apiUrl}/${params}`;
    return this.http.get(url, { headers: header })
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError.bind(this));
  }

  private handleError(error: any) {
    return Observable.throw(error.json());
  }
}
