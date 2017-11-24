import { Component, OnInit } from '@angular/core';
import { VenueService } from '../../../services/venue.service';
import { Venue } from '../../../models/venue';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  venues: Venue[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private venueService: VenueService) { }

  ngOnInit() {
    this.venueService.getVenues('').subscribe(venues => {
      this.venues = venues;
    });
  }
}
