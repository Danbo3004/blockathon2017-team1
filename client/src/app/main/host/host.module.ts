import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostRoutingModule } from './host-routing.module';
import { VenueListComponent } from './venue-list/venue-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostLayoutComponent } from './layout/layout.component';
import { EditVenueComponent } from './edit-venue/edit-venue.component';
import { ViewVenueComponent } from './view-venue/view-venue.component';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule
  ],
  declarations: [VenueListComponent, DashboardComponent, HostLayoutComponent, EditVenueComponent, ViewVenueComponent]
})
export class HostModule { }
