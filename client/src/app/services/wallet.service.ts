import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import Wallet from 'ethereumjs-wallet-browser';

@Injectable()
export class WalletService {

  constructor() { }

  unlockWalletFile(keyStore: File, password: string): Observable<any> {
    const fileReader = new FileReader();
    return Observable.fromPromise(new Promise((resolve, reject) => {
      fileReader.onload = (event: Event) => {
        try {
          const wallet = Wallet.fromV3(fileReader.result.toLowerCase(), password);
          resolve(wallet);
        } catch (error) {
          reject(error);
        }
      };
      fileReader.onerror = (error: any) => {
        reject(new Error('Cannot read wallet file.'));
      };
      fileReader.readAsText(keyStore);
    }));
  }
}
