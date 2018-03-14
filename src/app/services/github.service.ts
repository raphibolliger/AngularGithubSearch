import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { catchError, retry } from "rxjs/operators";

import { GitHubUser } from "../models/GitHubUser";
import { GitHubRepo } from '../models/GitHubRepo';
import { Error } from '../models/Error';
import { GitHubSearchResult } from '../models/GitHubSearchResult';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) {
    console.log("GitHubService ready....");
  }

  searchUsers(query: string): Observable<GitHubSearchResult> {
    console.log("search users with query: " + query);
    return this.http.get<GitHubSearchResult>("https://api.github.com/search/users?q=" + query)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(username: string): Observable<GitHubUser> {
    console.log("fetch user:" + username);
    return this.http.get<GitHubUser>("https://api.github.com/users/" + username)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRepos(username: string): Observable<GitHubRepo[]> {
    console.log("fetch repos from: " + username);
    return this.http.get<GitHubRepo[]>("https://api.github.com/users/" + username + "/repos")
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      return new ErrorObservable(error);
    } else {
      let e = new Error();

      switch (error.status) {
        case 404:
          e.status = error.status;
          e.title = "Benutzer nicht gefunden";
          e.message = "Der gesuchte Benutzer konnte nicht gefunden werden.";
          break;
        case 403:
          e.status = error.status;
          e.title = "Forbidden";
          e.message = error.error.message;
          break;
        default:
          e.status = error.status;
          e.title = "Fehler " + error.status + " bei der Suche";
          e.message = error.error.message;
      }

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      return new ErrorObservable(e);
    }
  };
}