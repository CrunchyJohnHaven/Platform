import { Component, NgModule, OnInit } from '@angular/core';
import { HttpService} from './../../../.././services/http.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  template: `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div class="card text-right" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
})
export class PortfolioComponent implements OnInit {
  private projectInfo;

  projects: Object[];

  constructor(private httpService: HttpService) {
   }
  ngOnInit() {
    this.projectInfo = this.httpService.getProjectInfo();
    console.log("this.projectInfo: ", this.projectInfo[0].backgroundImage);

  }
  getUrl(title) {
    switch(title) {
      case 'TheAmericanElement.com':
        return 'url(../../../../assets/AmericanElement.png)';
      case 'Belgrade Lakes Yacht Club' :
        return 'url(../../../../assets/GreatPondYacht.png)';
      case 'The New Dawn Trading Company' :
        return 'url(../../../../assets/NewDawnTrading.png)';
    }
  }
  redirect(title) {
    switch(title) {
      case 'TheAmericanElement.com' :
        return location.href = 'http://www.theamericanelement.com';
      case 'Belgrade Lakes Yacht Club' :
        return location.href = 'https://greatpondyachtclub.com';
      case 'The New Dawn Trading Company' :
        return location.href = 'http://www.newdawntradingcompany.com';
    }
  }
}
// <div (click)=redirect(project.title) class="card card-block"
//      *ngFor="let project of projectInfo" [ngStyle]="{'background-image': getUrl(project.title)}">
//       <h4 class="card-title"></h4>
//       <p class="card-text"></p>
// </div>
