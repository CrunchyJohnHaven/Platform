import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-about',
  templateUrl: './header-about.component.html',
  styleUrls: ['./header-about.component.css']
})
export class HeaderAboutComponent implements OnInit {
  title: string;
  subtitle: string; 
  constructor() {
    this.title = "About Sapper Coding"
    this.subtitle = "A bridge between military and technological excellence"
  }
  ngOnInit() {
  }

}
