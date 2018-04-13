import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({ // A decorator for class AppComponent
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService) { }
}
