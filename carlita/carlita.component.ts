import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-carlita',
  templateUrl: './carlita.component.html',
  styleUrls: ['./carlita.component.scss']
})
export class CarlitaComponent implements OnInit, AfterContentChecked {

  constructor(private translocoService: TranslocoService) { }

  currentLang = '';

  ngOnInit() {
    this.currentLang = this.translocoService.getActiveLang();
  }

  ngAfterContentChecked() {
    this.currentLang = this.translocoService.getActiveLang();
  }

}
