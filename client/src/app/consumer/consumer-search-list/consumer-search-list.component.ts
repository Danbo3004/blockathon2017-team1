import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumerService } from '../../services/consumer.service';
import { Home } from '../../models/home';

@Component({
  selector: 'app-consumer-search-list',
  templateUrl: './consumer-search-list.component.html',
  styleUrls: ['./consumer-search-list.component.scss']
})
export class ConsumerSearchListComponent implements OnInit {
  homes: Home [] = [];
  constructor(private router: Router, private consumerService: ConsumerService) { }

  ngOnInit() {
    this.consumerService.homesAnnounce$.subscribe(homes => this.homes = homes);
  }

  viewDetail(addressContract: string) {
    this.router.navigateByUrl('/consumer/home/' + addressContract);
  }
}
