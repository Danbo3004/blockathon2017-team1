import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './welcome/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ConsumerComponent } from './consumer/consumer.component';
import { ConsumerLayoutComponent } from './consumer/consumer-layout/consumer-layout.component';
import { ConsumerSearchListComponent } from './consumer/consumer-search-list/consumer-search-list.component';

export const routes: Routes = [
  { path: '', component: ConsumerComponent },
  {
    path: 'consumer', component: ConsumerLayoutComponent,
    children: [
      { path: 's', component: ConsumerSearchListComponent }
    ]
  },
  { path: 'app', loadChildren: 'app/main/main.module#MainModule'},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
