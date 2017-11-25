import { Component, OnInit } from '@angular/core';
import { Home, HomeBooking } from '../../models/home';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConsumerService } from '../../services/consumer.service';

@Component({
  selector: 'app-consumer-detail',
  templateUrl: './consumer-detail.component.html',
  styleUrls: ['./consumer-detail.component.css']
})
export class ConsumerDetailComponent implements OnInit {
  public home = new Home();
  public bookingLists: HomeBooking[] = [];

  loadView: number = 1;
  constructor(private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let address = params['homeAddress'];
      this.loadData(address);
    });
  }

  onLoadView(view: number) {
    this.loadView = view;
  }

  loadData(address: string) {
    Observable.zip(this.consumerService.getHomeByContractAddress(address),
      this.consumerService.getHomeTransactionList(address)).subscribe(([home, bookings]) => {
        this.home = home;
        this.bookingLists = bookings;
      });
  }
}
