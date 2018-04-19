import { Component, NgModule, OnInit } from '@angular/core';
import { HttpService} from './../../.././services/http.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],

})
export class PortfolioComponent implements OnInit {
  private projectInfo;
  id1 = 'american';
  id2 = 'yacht';
  id3 = 'dawn';
  projects: Object[];

  constructor(private httpService: HttpService) {
   }
   ngOnInit() { }
  redirect(id) {
    switch (id) {
      case 'american':
        return location.href = 'http://www.theamericanelement.com';
      case 'yacht' :
        return location.href = 'https://greatpondyachtclub.com';
      case 'dawn' :
        return location.href = 'http://www.newdawntradingcompany.com';
    }
  }
}
