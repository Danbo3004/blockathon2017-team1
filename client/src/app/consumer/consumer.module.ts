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
import { ConsumerSearchItemComponent } from './consumer-search-item/consumer-search-item.component';
import { MatCardModule } from '@angular/material/card';
import { ConsumerService } from '../services/consumer.service';
import { TruncateModule } from 'ng2-truncate';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, RouterModule, MatIconModule, SharedModule, StarRatingModule.forRoot(),
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, TruncateModule, FormsModule, HttpModule
  ],
  declarations: [ConsumerComponent, ConsumerNavbarComponent, ConsumerLayoutComponent,
    ConsumerSearchListComponent, ConsumerDetailComponent, BookingComponent, ConsumerSearchItemComponent],
  exports: [ConsumerComponent, ConsumerLayoutComponent],
  providers: [ConsumerService]
})
export class ConsumerModule { }
