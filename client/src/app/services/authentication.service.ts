import { Injectable } from '@angular/core';
import { EthereumTx } from 'ethereumjs-tx';

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

  signTransaction(tx: EthereumTx) {
    if (!this.wallet) {
      throw new Error('No wallet to use.');
    }

    tx.sign(this.currentWallet.getPrivateKey());
  }
}
