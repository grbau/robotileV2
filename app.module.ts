import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeGb from '@angular/common/locales/en-GB';
import localeFr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslocoConfig, TranslocoModule, TRANSLOCO_CONFIG } from '@ngneat/transloco';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarlitaComponent } from './carlita/carlita.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { GluepullerComponent } from './gluepuller/gluepuller.component';
import { GoogleAnalyticsService } from './google-analytics.service';
import { HomeComponent } from './home/home.component';
import { translocoLoader } from './transloco.loader';


registerLocaleData(localeFr, 'fr');
registerLocaleData(localeGb, 'en-GB');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarlitaComponent,
    GluepullerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AuthModule,
    HttpClientModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFireDatabaseModule,
    TranslocoModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [
    { provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: true,
        defaultLang: 'fr',
        fallbackLang: 'fr',
        prodMode: false
      } as TranslocoConfig
    },
    translocoLoader,
    GoogleAnalyticsService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
