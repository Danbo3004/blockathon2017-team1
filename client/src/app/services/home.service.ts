import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Home } from '../models/home';
import { web3 } from './web3.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';
import Tx from 'ethereumjs-tx';

export const HomeContract = web3.eth.contract(environment.homeContractAbi);
const HomeContractEvent = web3.eth.contract(environment.homeContractEventAbi);

const homeContractEventInstance = HomeContractEvent.at(environment.homeContractEventAddress);
homeContractEventInstance.allEvents(function (error, log) {
  if (!error) {
    console.log(log);
  }
});

@Injectable()
export abstract class HomeService {
  private estimatedGas = '';

  constructor(protected authenticationService: AuthenticationService) {
    this.estimatedGas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
  }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract cacheHome(home: Home): Observable<Home>;

  public newHome(home: Home): Observable<Home> {
    const data = HomeContract.new.getData(environment.judgeAddress, home.name, home.description, home.address.streetAddress, home.price, {
      data: environment.homeContractCode
    });

    return this.authenticationService.sendTransaction(data, this.estimatedGas).map(_ => home);
  }

  public updateInfo(home: Home): Observable<Home> {
    const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.name, home.description,
      home.address.streetAddress, home.price);
    return this.authenticationService.sendTransaction(data, this.estimatedGas).map(_ => home);
  }

  public updateCapacity(home: Home): Observable<Home> {
    const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.capacity.guest,
      home.capacity.bed, home.capacity.bedroom, home.capacity.bath);
    return this.authenticationService.sendTransaction(data, this.estimatedGas).map(_ => home);
  }

  public updateFeature(home: Home): Observable<Home> {
    const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.feature.internet,
      home.feature.kitchen, home.feature.iron, home.feature.hangers);
    return this.authenticationService.sendTransaction(data, this.estimatedGas).map(_ => home);
  }

  public bookHome(home: Home, startDate: number, duration: number): Observable<Home> {
    const value = '0x' + web3.toHex(web3.toWei(home.price * duration, 'ether'));
    const data = HomeContract.at(home.contractAddress).book.getData(startDate, duration);
    return this.authenticationService.sendTransaction(data, this.estimatedGas, value).map(_ => home);
  }
}
