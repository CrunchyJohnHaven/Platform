import { Component, OnInit } from '@angular/core';
import { HttpService} from './../.././http.service';

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
  mediaRedirect() {
    console.log("media click")
  }

}
