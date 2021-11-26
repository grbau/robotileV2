import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterContentChecked {

  NgForm = NgForm;

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
      private translocoService: TranslocoService,
      private contactService: ContactService,
      private router: Router

  ) {

   }

  currentLang = '';

  ngOnInit() {
    this.currentLang = this.translocoService.getActiveLang();
  }

  ngAfterContentChecked() {
    this.currentLang = this.translocoService.getActiveLang();
  }


  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
        data => this.model = data,
        error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
