import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer.component';
import { ConsumerNavbarComponent } from './consumer-layout/consumer-navbar/consumer-navbar.component';
import { ConsumerLayoutComponent } from './consumer-layout/consumer-layout.component';
import { ConsumerSearchListComponent } from './consumer-search-list/consumer-search-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ConsumerComponent, ConsumerNavbarComponent, ConsumerLayoutComponent,
                ConsumerSearchListComponent],
  exports: [ConsumerComponent, ConsumerLayoutComponent]
})
export class ConsumerModule { }
