import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../../../models/home';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  home: Home = new Home();

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.homeService.getHome(params['contractAddress']).subscribe(home => {
        this.home = home;
      });
    });
  }
}
