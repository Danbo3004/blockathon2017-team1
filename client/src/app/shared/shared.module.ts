import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuiCheckboxDirective } from '../directives/sui-checkbox.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatSelectModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatCheckboxModule, MatIconModule,
    StarRatingModule.forRoot()
  ],
  declarations: [
    SuiCheckboxDirective
  ],
  providers: [
  ]
})
export class SharedModule { }
