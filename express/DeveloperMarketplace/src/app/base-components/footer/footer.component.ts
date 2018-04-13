import { Component, OnInit } from '@angular/core';
import { HttpService} from './../.././services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private socialMediaInfo;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.socialMediaInfo = this.httpService.getSocialMediaInfo();
  }
  mediaRedirect(title) {
    console.log('media: ', title)
    switch(title) {
      case 'linkedIn' :
        return location.href = 'https://www.linkedin.com/in/johnhavenbradley';
      case 'blog' :
        return location.href = 'https://theamericanelement.com';
      case 'email' :
        return location.href = 'johnhavenbradley@sappercoding.com';
      }
    }
  }
