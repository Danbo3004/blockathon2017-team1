import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venue } from '../../../models/venue';
import { VenueService } from '../../../services/venue.service';

@Component({
  selector: 'app-view-venue',
  templateUrl: './view-venue.component.html',
  styleUrls: ['./view-venue.component.css']
})
export class ViewVenueComponent implements OnInit {

  venue: Venue = new Venue();

  constructor(
    private route: ActivatedRoute,
    private venueService: VenueService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.venueService.getVenue(params['contractAddress']).subscribe(venue => {
        this.venue = venue;
      });
    });
  }
}
