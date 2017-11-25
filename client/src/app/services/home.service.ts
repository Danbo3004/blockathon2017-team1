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

  constructor(protected authenticationService: AuthenticationService) { }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract cacheHome(home: Home): Observable<Home>;

  public newHome(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.authenticationService.wallet.getAddress().toString('hex')));
      const from = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
      const gas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
      const gasPrice = web3.toHex(environment.defaultGasPrice);
      const data = HomeContract.new.getData(environment.judgeAddress, home.name, home.description, home.address.streetAddress, home.price, {
        data: environment.homeContractCode
      });

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction('0x' + tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(newHome => this.cacheHome(newHome));
  }

  public updateInfo(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.authenticationService.wallet.getAddress().toString('hex')));
      const from = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
      const gas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
      const gasPrice = web3.toHex(environment.defaultGasPrice);
      const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.name, home.description, home.address.streetAddress, home.price);

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction(tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(updatedHome => this.cacheHome(updatedHome));
  }

  public updateCapacity(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.authenticationService.wallet.getAddress().toString('hex')));
      const from = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
      const gas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
      const gasPrice = web3.toHex(environment.defaultGasPrice);
      const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.capacity.guest, home.capacity.bed, home.capacity.bedroom, home.capacity.bath);

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction(tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(updatedHome => this.cacheHome(updatedHome));
  }

  public updateFeature(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.authenticationService.wallet.getAddress().toString('hex')));
      const from = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
      const gas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
      const gasPrice = web3.toHex(environment.defaultGasPrice);
      const data = HomeContract.at(home.contractAddress).updateInfo.getData(home.feature.internet, home.feature.kitchen, home.feature.iron, home.feature.hangers);

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction(tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(updatedHome => this.cacheHome(updatedHome));
  }

  public bookHome(home: Home): Observable<any> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.authenticationService.wallet.getAddress().toString('hex')));
      const from = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
      const gas = web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode }));
      const gasPrice = web3.toHex(environment.defaultGasPrice);
      const data = HomeContract.at(home.contractAddress).book.getData(home);

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction(tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(home);
        }
      });
    })).flatMap(updatedHome => this.cacheHome(updatedHome));
  }
}
