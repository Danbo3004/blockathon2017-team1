import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumerComponent } from './consumer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConsumerComponent],
  exports: [ConsumerComponent]
})
export class ConsumerModule { }
