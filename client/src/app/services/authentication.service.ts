import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginRequest, LoginResponse } from '../models/login';

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
}
