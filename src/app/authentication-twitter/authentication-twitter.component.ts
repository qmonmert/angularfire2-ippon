import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-authentication-twitter',
  templateUrl: 'authentication-twitter.component.html'
})
export class AuthenticationTwitterComponent {
  
  username: string;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.username = auth.twitter.username;
      } 
    });
  }

  login() {
    this.af.auth.login();
  }
  
  logout() {
    this.af.auth.logout();
  }

}
