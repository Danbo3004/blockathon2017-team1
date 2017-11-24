import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './welcome/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { ConsumerComponent } from './consumer/consumer.component';

export const routes: Routes = [
  { path: '', component: ConsumerComponent },
  { path: 'app', loadChildren: 'app/main/main.module#MainModule', canActivate: [ AuthenticationGuard ] },
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
