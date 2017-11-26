import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ConsumerModule } from './consumer/consumer.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { WalletService } from './services/wallet.service';
import { HomeService } from './services/home.service';
import { InternalHomeService } from './services/internal-home.service';
import { Web3Service } from './services/web3.service';
import { DataService } from './services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsumerService } from './services/consumer.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WelcomeModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    ConsumerModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    WalletService,
    { provide: HomeService, useClass: InternalHomeService },
    Web3Service, DataService, ConsumerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
