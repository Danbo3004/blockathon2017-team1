import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumerService } from '../../services/consumer.service';
import { Home } from '../../models/home';

@Component({
  selector: 'app-consumer-layout',
  templateUrl: './consumer-layout.component.html',
  styleUrls: ['./consumer-layout.component.css']
})
export class ConsumerLayoutComponent implements OnInit {
  showFilter: boolean = false;
  key: string = '';
  constructor(private route: ActivatedRoute, private consumerService: ConsumerService) { }

  ngOnInit() {
    this.route.queryParams
    .finally(() => {
      this.searchContent(this.key);
    })
    .subscribe(q => this.key = q['k']);
  }

  searchContent(key: string) {
    this.consumerService.searchHomes(key).subscribe(homes => this.consumerService.homes.next(homes));
  }
}
