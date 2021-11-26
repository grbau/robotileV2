import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentChecked {

  constructor(private translocoService: TranslocoService) { }

  currentLang = '';

  ngOnInit() {
    this.currentLang = this.translocoService.getActiveLang();
  }

  ngAfterContentChecked() {
    this.currentLang = this.translocoService.getActiveLang();
  }

}
