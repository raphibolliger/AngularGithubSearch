import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { User } from '../models/User';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public user: User = {
    preName: "Raphael",
    lastName: "Bolliger",
    email: "raphael.bolliger@trivadis.com"
  }

  login(): Observable<boolean> {
    return Observable.of(true).delay(2000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}