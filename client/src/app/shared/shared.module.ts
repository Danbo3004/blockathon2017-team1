import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiCheckboxDirective } from '../directives/sui-checkbox.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SuiCheckboxDirective
  ],
  providers: [
  ]
})
export class SharedModule { }
