import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HostLayoutComponent } from './host/layout/layout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'host', component: HostLayoutComponent, loadChildren: 'app/main/host/host.module#HostModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
