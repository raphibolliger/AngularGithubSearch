import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from "rxjs/operators";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { User } from '../models/User';
import { LoginViewModel } from '../models/LoginViewModel';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn = this.getLoginState();
    this.user = this.getUser();
  }

  // stored infos for navigation and login state
  public isLoggedIn:boolean;
  public user: User;
  public redirectUrl: string;

  public login(loginViewModel: LoginViewModel):Observable<any> {
    return this.http.post<any>("https://localhost:44372/v1/account/login", loginViewModel)
      .map(
        response => {
          console.log(response);
          this.setToken(response.token);
          this.setLoginState(true);
          this.setUser(response.user);
          localStorage.setItem("loginState", "true");

          // redirect the user
          let redirect = this.redirectUrl ? this.redirectUrl : '/account';
          this.router.navigate([redirect]);
        }
      );
  }

  public logout(): void {
    this.setLoginState(false);
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }

  public getToken(): string {
    return localStorage.getItem("token");
  }

  private setToken(token: string): void {
    localStorage.setItem("token", token)
  }

  private setUser(user: User) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  private getUser(): User {
    var userString = localStorage.getItem("user");
    return JSON.parse(userString);
  }

  private setLoginState(state: boolean) {
    localStorage.setItem("login", "false");
    this.isLoggedIn = state;
  }

  private getLoginState(): boolean {
    return localStorage.getItem("loginState") === "true";
  }

}