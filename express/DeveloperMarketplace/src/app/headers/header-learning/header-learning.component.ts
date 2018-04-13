import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-learning',
  templateUrl: './header-learning.component.html',
  styleUrls: ['./header-learning.component.css']
})
export class HeaderLearningComponent implements OnInit {
  title: string;
  subtitle: string; 
  constructor() {
    this.title = "Too Well Trained to Be Destroyed"
    this.subtitle = "Coding is like anything else, the best are those with no quit in them."
  }
  ngOnInit() {
  }
}
