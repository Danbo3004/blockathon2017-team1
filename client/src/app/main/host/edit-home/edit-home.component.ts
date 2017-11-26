import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home, StepList } from '../../../models/home';
import { HomeService } from '../../../services/home.service';
import { DataService } from '../../../services/data.service';
import { ViewChild } from '@angular/core/src/metadata/di';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.css']
})
export class EditHomeComponent implements OnInit {

  public contractAddress: string;
  public name: string;
  public description: string;
  public steps: any [] = [];
  public home: Home = new Home();
  private selectedStep: StepList = StepList.Place;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private dataService: DataService,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contractAddress = params['contractAddress'];
    });

    this.dataService.getSteps().subscribe(steps => this.steps = steps);
  }

  onSubmitClicked() {
    if (this.contractAddress) {
      this.homeService.updateInfo(this.home);
    } else {
      this.homeService.newHome(this.home)
        .flatMap(home => this.homeService.updateCapacity(home))
        .flatMap(home => this.homeService.updateFeature(home))
        .subscribe(home => {
          console.log(home);
          this.snackBar.open('Thanks for register. Your home will available shortly in search after few minuteus!');
        }, error => console.error(error));
    }
  }

  onNextStep(i: StepList) {
    this.selectedStep = i;
  }
}
