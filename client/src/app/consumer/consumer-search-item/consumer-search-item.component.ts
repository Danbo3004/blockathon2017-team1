import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../../models/home';

@Component({
  selector: 'app-consumer-search-item',
  templateUrl: './consumer-search-item.component.html',
  styleUrls: ['./consumer-search-item.component.css']
})
export class ConsumerSearchItemComponent implements OnInit {
  @Input() home: Home = new Home();
  constructor() { }

  ngOnInit() {
  }

}
