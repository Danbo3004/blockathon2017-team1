import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { HostModule } from './host/host.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    HostModule
  ],
  declarations: [ HomeComponent ]
})
export class MainModule { }
