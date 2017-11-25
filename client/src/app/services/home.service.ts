import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Home } from '../models/home';
import { web3, Web3Service } from './web3.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

export const HomeContract = web3.eth.contract(environment.homeContractAbi);

@Injectable()
export abstract class HomeService {
  private estimatedGas = '';

  constructor(
    protected web3Service: Web3Service,
    protected authenticationService: AuthenticationService) {
    this.estimatedGas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
  }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract cacheHome(home: Home): Observable<Home>;

  public newHome(home: Home): Observable<Home> {
    const data = HomeContract.new.getData(environment.judgeAddress, home.name, home.description, home.address.streetAddress, home.price, {
      data: environment.homeContractCode
    });

    return this.authenticationService.deployContract(data, this.estimatedGas).flatMap(hash => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        this.web3Service.registerCallback(hash, (error, log) => {
          if (error) {
            reject(error);
          } else {
            console.log('created', log);
            home.contractAddress = log.args._contractAddress;
            resolve(home);
          }
        });
      }));
    });
  }

  public updateInfo(home: Home): Observable<Home> {
    const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.name, home.description,
      home.address.streetAddress, home.price);
    return this.authenticationService.sendTransactionTo(home.contractAddress, data, this.estimatedGas).flatMap(hash => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        this.web3Service.registerCallback(hash, (error, log) => {
          if (error) {
            reject(error);
          } else {
            resolve(home);
          }
        });
      }));
    });
  }

  public updateCapacity(home: Home): Observable<Home> {
    console.log('update capacity', home, home.contractAddress);
    const data = HomeContract.at(home.contractAddress).updateCapacity.getData(home.capacity.guest,
      home.capacity.bed, home.capacity.bedroom, home.capacity.bath);
    return this.authenticationService.sendTransactionTo(home.contractAddress, data, this.estimatedGas).flatMap(hash => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        this.web3Service.registerCallback(hash, (error, log) => {
          if (error) {
            reject(error);
          } else {
            resolve(home);
          }
        });
      }));
    });
  }

  public updateFeature(home: Home): Observable<Home> {
    const data = HomeContract.at(home.contractAddress).updateFeature.getData(home.feature.internet,
      home.feature.kitchen, home.feature.iron, home.feature.hangers);
    return this.authenticationService.sendTransactionTo(home.contractAddress, data, this.estimatedGas).flatMap(hash => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        this.web3Service.registerCallback(hash, (error, log) => {
          if (error) {
            reject(error);
          } else {
            resolve(home);
          }
        });
      }));
    });
  }

  public bookHome(home: Home, startDate: number, duration: number): Observable<Home> {
    const value = '0x' + web3.toHex(web3.toWei(home.price * duration, 'ether'));
    const data = HomeContract.at(home.contractAddress).book.getData(startDate, duration);
    return this.authenticationService.sendTransactionTo(home.contractAddress, data, this.estimatedGas, value).flatMap(hash => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        this.web3Service.registerCallback(hash, (error, log) => {
          if (error) {
            reject(error);
          } else {
            resolve(home);
          }
        });
      }));
    });
  }
}
