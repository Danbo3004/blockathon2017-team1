import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Home } from '../models/home';
import { web3 } from './web3.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

const Tx: any = (<any>window).ethereumjs.Tx;
export const HomeContract = new web3.eth.contract(environment.homeContractAbi);

@Injectable()
export abstract class HomeService {

  constructor(protected authenticationService: AuthenticationService) { }

  public abstract getHomes(host: string): Observable<Home[]>;

  public abstract getHome(address: string): Observable<Home>;

  public abstract cacheHome(home: Home): Observable<Home>;

  public newHome(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const txParams = {
        nonce: web3.eth.getTransactionCount(this.authenticationService.wallet.getAddress()),
        from: '0x' + this.authenticationService.wallet.getAddress().toString('hex'),
        gas: web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode })),
        gasPrice: web3.toHex(21000),
        data: HomeContract.new.getData({
          data: '0x' + environment.homeContractCode
        })
      };
      const tx = new Tx(txParams);
      this.authenticationService.signTransaction(tx);
      web3.eth.sendRawTransaction(tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          home.contractAddress = hash;
          resolve(home);
        }
      });
    })).flatMap(newHome => this.cacheHome(newHome));
  }

  public updateHome(home: Home): Observable<Home> {
    return Observable.fromPromise(new Promise<Home>((resolve, reject) => {
      const txParams = {
        nonce: web3.eth.getTransactionCount(this.authenticationService.wallet.getAddress()),
        from: '0x' + this.authenticationService.wallet.getAddress().toString('hex'),
        gas: web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode })),
        gasPrice: web3.toHex(21000),
        data: HomeContract.at(home.contractAddress).updateInfo.getData(home)
      };
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
      const txParams = {
        nonce: web3.eth.getTransactionCount(this.authenticationService.wallet.getAddress()),
        from: '0x' + this.authenticationService.wallet.getAddress().toString('hex'),
        gas: web3.toHex(web3.eth.estimateGas({ data: environment.homeContractCode })),
        gasPrice: web3.toHex(21000),
        data: HomeContract.at(home.contractAddress).book.getData(home)
      };
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