import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home.service';
import { Home } from '../../../models/home';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  homes: Home[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHomes('').subscribe(homes => {
      this.homes = homes;
    });
  }
}
