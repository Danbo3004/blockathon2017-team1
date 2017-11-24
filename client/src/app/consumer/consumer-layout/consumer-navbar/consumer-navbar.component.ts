import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-consumer-navbar',
  templateUrl: './consumer-navbar.component.html',
  styleUrls: ['./consumer-navbar.component.css']
})
export class ConsumerNavbarComponent implements OnInit {
  @Input() showFilter: boolean = true;
  @Output() showFilterChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('rangeend') checkOutRef: ElementRef;
  @ViewChild('rangestart') checkInRef: ElementRef;

  constructor() { }

  ngOnInit() {
    this.loadFilter();
  }

  onShowFilter() {
    this.showFilter = !this.showFilter;
    this.showFilterChange.emit(this.showFilter);

    if (this.showFilter) {
      this.loadFilter();
    }
  }

  loadFilter() {
    if (!this.showFilter) {
      return;
    }

    setTimeout(() => {
      this.loadDateTime();
    }, 0)
  }

  loadDateTime() {
    $('#rangestart').calendar({
      type: 'date',
      endCalendar: $('#rangeend'),
      onChange: (date, text) => {
        console.log(date, text);
      }
    });
    
    $('#rangeend').calendar({
      type: 'date',
      startCalendar: $('#rangestart'),
      onChange: (date, text) => {
        console.log(date, text);
      }
    });
  }
}
