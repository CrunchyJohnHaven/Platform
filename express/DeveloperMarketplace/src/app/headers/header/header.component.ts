console.log('********* HEADER **********');
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
title: string;
subtitle: string; 
learn: string;
  constructor() {
    this.title = "Sapper Coding"
    this.subtitle = "Web, mobile, and viral marketing, with military precision"
    this.learn = "Do you have what it takes to be a Sapper?"
  }

  ngOnInit() {
  }

}
