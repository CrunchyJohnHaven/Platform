import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnInit {
  newContact: any;


  constructor(private _httpService: HttpService) { }

  ngOnInit() {

  }
  // onSubmit() {
  //   let observable = this._httpService.newContact(this.newContact)
  //   observable.subscribe(data=> {
  //   })
  //   console.log("onSubmit")
  //   this.newContact = ''
  // }
}
