import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { EditVenueComponent } from './edit-venue/edit-venue.component';
import { ViewVenueComponent } from './view-venue/view-venue.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'venues', component: VenueListComponent },
  { path: 'venue/new', component: EditVenueComponent },
  { path: 'venue/:id/edit', component: EditVenueComponent },
  { path: 'venues/:id', component: ViewVenueComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HostRoutingModule { }
