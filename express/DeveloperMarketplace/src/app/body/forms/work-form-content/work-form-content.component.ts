import { Component } from '@angular/core';

@Component({
  selector: 'app-work-form-content',
  templateUrl: './work-form-content.component.html',
  styleUrls: ['./work-form-content.component.css'],
  template: `
  <div class="form"
    *ngFor="let project of projects">
    <div class="card card-block" [hidden]="project.hide">
      <h4 class="card-title" [hidden]="project.hide">{{project.title}}</h4>
      <br><br>
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
    <a class="btn btn-primary" (click)="toggle(project)">Request a quote from a Sapper</a>
    <br><br>
  </div>
    `
})
export class WorkFormContentComponent {
  projects: Object[];

  constructor() {
    this.projects = [
      {
        title: "Request A Quote",
        summary: "Fullstack Web Development",
        hide: true
      },
    ];
   }
  ngOnInit() {
  }
  toggle(project) {
    project.hide = !project.hide;
  }
}