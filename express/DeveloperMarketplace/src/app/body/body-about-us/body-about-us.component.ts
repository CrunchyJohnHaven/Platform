import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-about-us',
  templateUrl: './body-about-us.component.html',
  styleUrls: ['./body-about-us.component.css']
})
export class BodyAboutUsComponent implements OnInit {
  title: string;
  summary: string; 
  founding: string;
  constructor() { 
  this.title = "A Service-Disabled Veteran Owned Small Business (SDVOSB)"
  this.summary = "Sapper Coding was founded in Silicon Valley to train military Veterans to provide the highest caliber of web and mobile-app services through the rigorous selection, training, and management of our nations brightest service men and women in the heart of Silicon Valley."
  this.founding = "Sapper Coding was founded by Loy O'Kelley (CPT. Ret.) and John Bradley (CPT. Ret.). In the Army, 'Sappers' are elite combat engineers, technical experts who abide by the Sapper Creed, which includes the stanza: 'The cutting edge of my countries sword.' As a Veteran of both Army Sapper and Army Ranger School, and as a veteran developer, John Bradley applies the Sapper and Ranger standard to training and leading the best and brightest Veterans into the tech industry. As a decorated combat veteran & coder who earned an MBA & M.S. in Finance while in uniform, Loy O'Kelley ensures that every Sapper Coder is trained for professional and financial longevity in the technology industry."
  }
  ngOnInit() {
  }
}
