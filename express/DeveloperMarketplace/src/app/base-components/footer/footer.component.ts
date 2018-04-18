import { Component, OnInit } from '@angular/core';
import { HttpService} from './../.././services/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private socialMediaInfo;
  hideForm: boolean;
  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.hideForm = true;
    this.socialMediaInfo = this.httpService.getSocialMediaInfo();
  }
  mediaRedirect(title) {
    console.log('media: ', title);
    switch (title) {
      case 'linkedIn' :
        return location.href = 'https://www.linkedin.com/in/johnhavenbradley';
      case 'blog' :
        return location.href = 'https://theamericanelement.com';
      case 'email' :
        window.location.hash = 'your-page-element';
        return this.hideForm = !this.hideForm;
      }
    }
  }
