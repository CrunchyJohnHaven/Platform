import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-container',
  templateUrl: './portfolio-container.component.html',
  styleUrls: ['./portfolio-container.component.css']
})
export class PortfolioContainerComponent implements OnInit {
  title: string;
  constructor() {
    this.title = "Some web development work by our Veterans..."
  }

  ngOnInit() {
  }

}
