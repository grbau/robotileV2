import { NgModule } from '@angular/core';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['404']);

const routes: Routes = [
  /*{
    path: 'home',
    component: LoginComponent,
  },*/
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
