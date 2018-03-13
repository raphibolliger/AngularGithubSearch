import { Component } from '@angular/core';
import { GithubService } from './services/github.service';
import { GitHubUser } from './models/GitHubUser';
import { GitHubRepo } from './models/GitHubRepo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";
import { Error } from './models/Error';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'GitHubSearch App';

  public searchText = new BehaviorSubject<string>("raphibolliger");

  isLoading: boolean = false;

  user: GitHubUser;
  repos: GitHubRepo[];

  error: Error;

  constructor(private githubservice: GithubService) {

  }

  ngOnInit() {
    this.searchChanged(this.searchText).subscribe(
      x => this.updateInfos(x)
    );
  }

  updateInfos(username: string) {
    this.isLoading = true;
    this.githubservice.getUser(username).subscribe(
      u => this.setUser(u),
      e => this.setError(e),
      () => this.isLoading = false
    );

    this.githubservice.getRepos(username).subscribe(
      r => this.setRepos(r),
      e => this.setError(e),
      () => this.isLoading = false
    );
  }

  setUser(user: GitHubUser) {
    this.user = user;
    this.error = null;
  }

  setRepos(repos: GitHubRepo[]) {
    this.repos = repos;
    this.error = null;
    this.isLoading = false;
  }

  setError(error: Error) {
    this.error = error;
    this.user = null;
    this.repos = null;
    this.isLoading = false;
  }

  searchChanged(terms: Observable<string>) {
    return terms.debounceTime(500).distinctUntilChanged();
  }

}
