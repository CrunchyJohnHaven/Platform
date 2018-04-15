import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-body-learning',
  templateUrl: './body-learning.component.html',
  styleUrls: ['./body-learning.component.css']
})
export class BodyLearningComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };


  constructor( private authService: AuthService ) { }

  ngOnInit() {  }

}
