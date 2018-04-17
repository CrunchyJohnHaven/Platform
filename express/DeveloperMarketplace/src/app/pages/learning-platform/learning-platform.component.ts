import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-learning-platform',
  templateUrl: './learning-platform.component.html',
  styleUrls: ['./learning-platform.component.css']
})
export class LearningPlatformComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // signInWithFacebook() {
  //   this.authService.signInWithFacebook()
  //   .then((res) => {
  //       this.router.navigate(['learning-content']);
  //     })
  //   .catch((err) => console.log(err));
  // }


  // signInWithGoogle() {
  //   this.authService.signInWithGoogle()
  //   .then((res) => {
  //       this.router.navigate(['learning-content']);
  //     })
  //   .catch((err) => console.log(err));
  // }

  // signInWithGithub() {
  //   this.authService.signInWithGithub()
  //   .then((res) => {
  //       this.router.navigate(['learning-content']);
  //     })
  //   .catch((err) => console.log(err));
  // }

  // signInWithEmail() {

  //   this.authService.signInRegular(this.user.email, this.user.password)
  //     .then((res) => {
  //       console.log(res);
  //       this.router.navigate(['learning-content']);
  //     })
  //     .catch((err) => console.log('error: ' + err));
  // }

  ngOnInit() {
  }

}
