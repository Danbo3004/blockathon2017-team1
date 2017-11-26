import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Home } from '../../../models/home';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerService } from '../../../services/consumer.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  homes: Home[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService,
    private consumerService: ConsumerService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.homeService.getHomes('').subscribe(homes => {
    //   this.homes = homes;
    // });
    
    let address = '0x' + this.authenticationService.wallet.getAddress().toString('hex');
    this.consumerService.getHostPlaces(address).subscribe(homes => this.homes = homes);
  }
}
