import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ConsumerLayoutComponent } from './consumer-layout/consumer-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerLayoutComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    ConsumerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
