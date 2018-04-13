import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-form-content',
  templateUrl: './work-form-content.component.html',
  styleUrls: ['./work-form-content.component.css'],
  template: `
  <div class="form"
    *ngFor="let project of projects">
    <a class="btn btn-primary" (click)="toggle(project)">Request a quote from a Sapper</a>
    <div class="card card-block" [hidden]="project.hide">
      <h4 class="card-title" [hidden]="project.hide">{{project.title}}</h4>
      <form>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName">
        </div>
        <div class="form-group">
          <label for="lastName">Email</label>
          <input type="text" class="form-control" id="email">
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" class="form-control" id="phoneNumber">
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
  </div>
    `
})
export class WorkFormContentComponent implements OnInit {
  projects: Object[];

  constructor() {
   }
  ngOnInit() {
  }
  toggle(project) {
    project.hide = !project.hide;
  }
}