import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Web3 } from 'web3';
import { Observable } from 'rxjs/Observable';

export const web3 = new Web3(new Web3.providers.HttpProvider(environment.networkUrl));

@Injectable()
export class Web3Service {

  constructor() { }

  getTransactionCount(address: string): Observable<number> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      web3.eth.getTransactionCount((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    }));
  }
}
