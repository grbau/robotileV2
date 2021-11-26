import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-gluepuller',
  templateUrl: './gluepuller.component.html',
  styleUrls: ['./gluepuller.component.scss']
})
export class GluepullerComponent implements OnInit, AfterContentChecked {

  constructor(private translocoService: TranslocoService) { }

  currentLang = '';

  ngOnInit() {
    this.currentLang = this.translocoService.getActiveLang();
  }

  ngAfterContentChecked() {
    this.currentLang = this.translocoService.getActiveLang();
  }

}
