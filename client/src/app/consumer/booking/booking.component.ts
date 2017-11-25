import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @ViewChild('rangeend') checkOutRef: ElementRef;
  @ViewChild('rangestart') checkInRef: ElementRef;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loadDateTime();
    }, 0);
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

}
