import { Injectable } from '@angular/core';

declare type Tx = any;

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

  signTransaction(tx: Tx) {
    if (!this.wallet) {
      throw new Error('No wallet to use.');
    }

    tx.sign(this.currentWallet.getPrivateKey());
  }
}
