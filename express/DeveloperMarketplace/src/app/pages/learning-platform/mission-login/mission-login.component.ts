import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-login',
  templateUrl: './mission-login.component.html',
  styleUrls: ['./mission-login.component.css']
})
export class MissionLoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
