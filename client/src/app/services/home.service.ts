import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Home } from '../models/home';
import { web3 } from './web3.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

export const HomeContract = web3.eth.contract(environment.homeContractAbi);

@Injectable()
export abstract class HomeService {

  constructor(protected authenticationService: AuthenticationService) { }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract cacheHome(home: Home): Observable<Home>;

  public newHome(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      HomeContract.new({
        from: this.authenticationService.wallet.getAddress(),
        gas: web3.eth.estimateGas({ data: environment.homeContractCode }),
        data: environment.homeContractCode
      }, (error, contract) => {
        if (error) {
          reject(error);
          return;
        }

        if (contract.address) {
          home.contractAddress = contract.address;
          resolve(home);
        }
      });
    })).flatMap(newHome => this.cacheHome(newHome));
  }

  public updateHome(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      HomeContract.at(home.contractAddress).updateInfo((error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(updatedHome => this.cacheHome(updatedHome));
  }

  public bookHome(home: Home): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      HomeContract.at(home.contractAddress).book();
    }));
  }
}
