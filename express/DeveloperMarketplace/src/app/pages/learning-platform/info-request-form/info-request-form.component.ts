import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-request-form',
  templateUrl: './info-request-form.component.html',
  styleUrls: ['./info-request-form.component.css']
})
export class InfoRequestFormComponent implements OnInit {

  applicantInformation: Object = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    timeOrComment: ''
  };

  constructor( private dataService: DataService ) { }

  submitFormToBackend() {
    this.dataService.processAndStoreApplication(this.applicantInformation);
  }

  ngOnInit() {
  }
}
