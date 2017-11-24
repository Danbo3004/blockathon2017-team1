import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { WalletService } from '../services/wallet.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    WalletService
  ]
})
export class SharedModule { }
