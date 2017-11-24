import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ConsumerSearchItemComponent } from './consumer-search-item/consumer-search-item.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { WalletService } from './services/wallet.service';
import { HomeService } from './services/home.service';
import { InternalHomeService } from './services/internal-home.service';
import { Web3Service } from './services/web3.service';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerSearchItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WelcomeModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    ConsumerModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    WalletService,
    { provide: HomeService, useClass: InternalHomeService },
    Web3Service
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
