import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../../../models/home';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  public contractAddress: string;
  public name: string;
  public description: string;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contractAddress = params['contractAddress'];
    });
  }

  onSubmitClicked() {
    const home = new Home();

    if (this.contractAddress) {
      this.homeService.updateHome(home);
    } else {
      this.homeService.newHome(home);
    }
  }
}
