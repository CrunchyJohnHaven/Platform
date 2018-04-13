import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  row1: string;
  row2: string; 
  row3: string;
  row4: string;
  row5: string; 
  row6: string;
  row7: string;
  row8: string;
  constructor() { 
    this.row1 = "HOME";
    this.row2 = "LEARNING PLATFORM";
    this.row3 = "WEB DESIGN";
    this.row4 = "CUSTOM APPS";
    this.row5 = "WEB MARKETING";
    this.row6 = "CONTACT";
    this.row7 = "BLOG"
    this.row8 = "ABOUT US";
  }

  ngOnInit() {
  }

}
