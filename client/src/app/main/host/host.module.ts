import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostRoutingModule } from './host-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostLayoutComponent } from './layout/layout.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { SetupHomeStepsComponent } from './common/setup-home-steps/setup-home-steps.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgUploaderComponent } from './common/ng-uploader/ng-uploader.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TruncateModule } from 'ng2-truncate';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    SharedModule, MatSelectModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatCheckboxModule,
    FormsModule, MatCardModule, TruncateModule, MatSnackBarModule
  ],
  declarations: [HomeListComponent, DashboardComponent, SetupHomeStepsComponent,
    HostLayoutComponent, EditHomeComponent, ViewHomeComponent, NgUploaderComponent],
  providers: []
})
export class HostModule { }
