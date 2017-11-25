import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-search-list',
  templateUrl: './consumer-search-list.component.html',
  styleUrls: ['./consumer-search-list.component.scss']
})
export class ConsumerSearchListComponent implements OnInit {
  items: any [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDetail() {
    this.router.navigateByUrl('/consumer/home/' + 12);
  }
}
