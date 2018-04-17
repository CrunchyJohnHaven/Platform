console.log('********* HTTP **********');

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  private projectInfo = [
      {
        title: 'TheAmericanElement.com',
        summary: 'Fullstack Web Development',
        backgroundImage: '../../../../assets/coverPhoto.png',
        url: 'http://www.theamericanelement.com'
      },
      {
        title: 'Belgrade Lakes Yacht Club',
        summary: 'Fullstack Web Development',
        backgroundImage: '../../../../assets/coverPhoto.png',
        url: 'https://greatpondyachtclub.com'
      },
      {
        title: 'The New Dawn Trading Company',
        summary: 'Fullstack Web Development',
        backgroundImage: '../../../../assets/coverPhoto.png',
        url: 'http://www.newdawntradingcompany.com'
      },
    ];
  private socialMediaInfo = [
    {linkedIn: 'https://linkedin.com/in/johnhavenbradley'},
    {blog: 'http://www.theamericanelement.com/'},
    {email: 'http://johnhavenbradley@sapperCoding.com'},
  ];
  
  getProjectInfo() {
    return this.projectInfo;
  }
  getSocialMediaInfo() {
    return this.socialMediaInfo;
  }
  newContact(newContact) {
    console.log('addContact http');
    return this._http.post('/contact', newContact);
  }
}
