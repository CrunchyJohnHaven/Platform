import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-web',
  templateUrl: './form-web.component.html',
  styleUrls: ['./form-web.component.css'],
})

export class FormWebComponent implements OnInit {
  newContact: any;
  errors: any = {};

  constructor(private _httpService: HttpService, private _router: Router) {this.newContact = {firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      message: ''};
    }
  // private http: Http
  ngOnInit() {
  }
  home() {
    console.log('***** NEW - home() ******');
    this._router.navigate(['/']);
  }
  submitContact() {
    this._httpService.newContact(this.newContact);
    // observable.subscribe(data => {
    //   if('error' in data) {
    //     this.errorsRend(data);
    //   } else {
    //     this.home();
    //   }
    // });
  }
  errorsRend(data) {
    this.errors = this._httpService.renderErrors(data);
    console.log('THIS.ERRORS: ', this.errors);
  }
}

// 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
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env
// npm install --save @sendgrid/client


