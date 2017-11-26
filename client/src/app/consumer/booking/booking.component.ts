import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Home } from '../../models/home';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material';

declare const $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit, OnChanges {
  @Input() home = new Home();
  @ViewChild('rangeend') checkOutRef: ElementRef;
  @ViewChild('rangestart') checkInRef: ElementRef;
  checkInTime = 0;
  checkOutTime = 0;
  duration = 0;
  rangeGuests: number[] = [];
  guests: number = 1;

  constructor(private homeService: HomeService, public snackBar: MatSnackBar) {
    this.home.price = 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['home'] && changes['home'].currentValue) {
      this.rangeGuests = [];
      for (let i = 1; i <= this.home.capacity.guest; i++) {
        this.rangeGuests.push(i);
      }
    }
  }

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
        if (date) {
          this.checkInTime = ~~(date.getTime() * 1.15740741e-8);
        }
      }
    });

    $(this.checkOutRef.nativeElement).calendar({
      type: 'date',
      startCalendar: $(this.checkInRef.nativeElement),
      onChange: (date, text) => {
        if (date) {
          this.checkOutTime = ~~(date.getTime() * 1.15740741e-8);
        }
      }
    });
  }

  get price() {
    if (!this.checkOutTime || !this.checkInTime) {
      return this.home.price;
    }

    let duration = this.checkOutTime - this.checkInTime;
    return this.home.price * duration;
  }

  onBooking() {
    this.homeService.bookHome(this.home, this.checkInTime, this.checkOutTime - this.checkInTime).subscribe(data => {
      console.log(data);
      this.snackBar.open('Your request in processing');
    })
  }
}
