import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GoogleAnalyticsService } from './google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  title = 'robotile';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private googleAnalyticsService: GoogleAnalyticsService,
   )
{ }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.meta.addTag({name: 'keywords', content: 'Carrelage, machine de pose de carrelage, Carlita, Robotile'});
    this.meta.addTag({name: 'google-site-verification', content: 'Yr0A3IhhiI1ieVuyNlCaa_0Y_eOTnrpY3b6b9kNFM'});
    this.googleAnalyticsService.subscribe();
  }
}
