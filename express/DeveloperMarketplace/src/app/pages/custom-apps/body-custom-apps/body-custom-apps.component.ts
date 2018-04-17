import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-custom-apps',
  templateUrl: './body-custom-apps.component.html',
  styleUrls: ['./body-custom-apps.component.css']
})
export class BodyCustomAppsComponent implements OnInit {
  title1: string;
  text1a: string;
  text1b: string; 
  text1c: string; 
  text1d: string; 

  title2: string;
  text2a: string;
  text2b: string; 
  text2c: string; 
  text2d: string; 
  constructor() { 
  this.title1 = "Simply tell us about your business and we'll design a website to achieve your goals!"
  this.text1a = "Track your progress and set your goals."
  this.text1b = "Receive weekly analytics reports, Facebook insights, and SEO reports to ensure your site and Internet marketing activities are performing for you."
  this.text1c = "Our sappers will instruct your team to understand our reports in a way that will allow you to take informed action."

  this.title2 = "Save Time & Money. Get Results, like traffic, leads, and sales through your small business website."
  this.text2a = "Save time and save money while working with an experienced Sapper Team Leader every step of the way during your website design process."
  this.text2b = "Your Sapper Team Leader can deliver services far beyond the creation of your web site. We help get your web site seen and performing to provide clicks, leads, and sales."
  }
  ngOnInit() {
  }

}
