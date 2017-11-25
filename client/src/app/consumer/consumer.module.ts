import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer.component';
import { ConsumerNavbarComponent } from './consumer-layout/consumer-navbar/consumer-navbar.component';
import { ConsumerLayoutComponent } from './consumer-layout/consumer-layout.component';
import { ConsumerSearchListComponent } from './consumer-search-list/consumer-search-list.component';
import { RouterModule } from '@angular/router';
import { ConsumerDetailComponent } from './consumer-detail/consumer-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { BookingComponent } from './booking/booking.component';
import { StarRatingModule } from 'angular-star-rating';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule, RouterModule, MatIconModule, SharedModule, StarRatingModule.forRoot(),
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatCheckboxModule, MatIconModule,
  ],
  declarations: [ConsumerComponent, ConsumerNavbarComponent, ConsumerLayoutComponent,
    ConsumerSearchListComponent, ConsumerDetailComponent, BookingComponent],
  exports: [ConsumerComponent, ConsumerLayoutComponent]
})
export class ConsumerModule { }
