import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
  
})
export class FormComponent implements OnInit {
  newContact: any;
  
  
  constructor(private _httpService: HttpService) {this.newContact = {firstName: 'John', lastName: 
'Bradley'} }

  ngOnInit() {

    console.log("onInit")
    console.log("newContact: ", this._httpService.newContact)
  }
  onSubmit() {
    let observable = this._httpService.newContact(this.newContact)
    observable.subscribe(data=> {
    })
    console.log("onSubmit")
    this.newContact = ''
  }
}
