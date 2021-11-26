import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarlitaComponent } from './carlita/carlita.component';
import { ContactComponent } from './contact/contact.component';
import { GluepullerComponent } from './gluepuller/gluepuller.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

//const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['404']);

const routes: Routes = [
  /*{
    path: 'home',
    component: LoginComponent,
  },*/
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    component: HomeComponent,
  },
  /*{
    path: 'home',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },*/ 
  
  {
    path: 'carlita',
    component: CarlitaComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'gluepuller',
    component: GluepullerComponent,
  },

  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
