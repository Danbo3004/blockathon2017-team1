import { Component, OnInit, Output, Input, EventEmitter,
   ViewChild, ElementRef } from '@angular/core';
import { ConsumerService } from '../../../services/consumer.service';
declare const $: any;

@Component({
  selector: 'app-consumer-navbar',
  templateUrl: './consumer-navbar.component.html',
  styleUrls: ['./consumer-navbar.component.css']
})
export class ConsumerNavbarComponent implements OnInit {
  @Input() showFilter: boolean = true;
  @Input() key: string = '';
  @Output() showFilterChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() searchEmit: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('rangeend') checkOutRef: ElementRef;
  @ViewChild('rangestart') checkInRef: ElementRef;

  constructor(private consumerService: ConsumerService) { }

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
    $(this.checkInRef.nativeElement).calendar({
      type: 'date',
      endCalendar: $(this.checkOutRef.nativeElement),
      onChange: (date, text) => {
        console.log(date, text);
      }
    });
    
    $(this.checkOutRef.nativeElement).calendar({
      type: 'date',
      startCalendar: $(this.checkInRef.nativeElement),
      onChange: (date, text) => {
        console.log(date, text);
      }
    });
  }

  onSearch() {
    this.searchEmit.emit(this.key);
  }
}
