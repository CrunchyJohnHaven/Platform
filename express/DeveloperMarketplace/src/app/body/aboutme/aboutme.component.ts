import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutmeComponent implements OnInit {
  private userInfo;
  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.userInfo = this._httpService.getProjectInfo();
  }

}
