import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeListComponent } from './home-list/home-list.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { ViewHomeComponent } from './view-home/view-home.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'homes', component: HomeListComponent },
  { path: 'home/new', component: EditHomeComponent },
  { path: 'home/:contractAddress/edit', component: EditHomeComponent },
  { path: 'home/:contractAddress', component: ViewHomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HostRoutingModule { }
