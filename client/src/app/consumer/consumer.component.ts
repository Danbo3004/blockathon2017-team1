import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  key: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSearch () {
    this.router.navigate(['consumer', 's'], { queryParams: { k: this.key }});
  }
}
