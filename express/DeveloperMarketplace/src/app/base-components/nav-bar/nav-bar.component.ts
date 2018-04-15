import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // user = {
  //   displayName: '',
  //   isLoggedIn: true
  // };
  // may not need this info as we can get it straight from service in template

  constructor( private authService: AuthService ) { }

  doUserLogout() {
    this.authService.logout();
  }

  ngOnInit() {
  }
}
