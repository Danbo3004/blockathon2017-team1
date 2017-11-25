import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import Web3 from 'web3';

export const web3 = new Web3(new Web3.providers.HttpProvider(environment.networkUrl));

@Injectable()
export class Web3Service {

  private callbackRegistry: {[hash: string]: any} = {};

  constructor() {
    const HomeContractEvent = web3.eth.contract(environment.homeContractEventAbi);

    const homeContractEventInstance = HomeContractEvent.at(environment.homeContractEventAddress);
    homeContractEventInstance.allEvents((error, log) => {
      if (error) {
        return;
      }

      if (this.callbackRegistry[log.transactionHash]) {
        this.callbackRegistry[log.transactionHash](error, log);
        delete this.callbackRegistry[log.transactionHash];
      }
    });
  }

  registerCallback(txHash: string, callback: any) {
    this.callbackRegistry[txHash] = callback;
  }

  clearCallbackRegistry() {
    this.callbackRegistry = {};
  }
}
