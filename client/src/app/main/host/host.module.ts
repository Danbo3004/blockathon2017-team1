import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostRoutingModule } from './host-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostLayoutComponent } from './layout/layout.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule
  ],
  declarations: [HomeListComponent, DashboardComponent, HostLayoutComponent, EditHomeComponent, ViewHomeComponent],
  providers: []
})
export class HostModule { }
