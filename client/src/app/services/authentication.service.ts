import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { web3 } from './web3.service';
import { environment } from '../../environments/environment';

import Tx from 'ethereumjs-tx';

@Injectable()
export class AuthenticationService {

  private currentWallet: any = null;

  constructor() { }

  get wallet(): any {
    return this.currentWallet;
  }

  set wallet(wallet: any) {
    this.currentWallet = wallet;
  }

  deployContract(data: string, gas: string, value?: string): Observable<string> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.currentWallet.getAddress().toString('hex')));
      const from = '0x' + this.currentWallet.getAddress().toString('hex');
      const gasPrice = web3.toHex(environment.defaultGasPrice);

      const txParams = { nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data, value: value || '0x00' };
      const tx = new Tx(txParams);
      tx.sign(this.currentWallet.getPrivateKey());
      web3.eth.sendRawTransaction('0x' + tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    }));
  }

  sendTransactionTo(to: string, data: string, gas: string, value?: string): Observable<string> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      const nonce = web3.toHex(web3.eth.getTransactionCount('0x' + this.currentWallet.getAddress().toString('hex')));
      const from = '0x' + this.currentWallet.getAddress().toString('hex');
      const gasPrice = web3.toHex(environment.defaultGasPrice);

      const txParams = { to: to, nonce: nonce, from: from, gas: gas, gasPrice: gasPrice, data: data, value: value || '0x00' };
      const tx = new Tx(txParams);
      tx.sign(this.currentWallet.getPrivateKey());
      web3.eth.sendRawTransaction('0x' + tx.serialize().toString('hex'), (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    }));
  }
}
