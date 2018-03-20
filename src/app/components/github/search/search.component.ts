import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import { GithubService } from '../../../services/github.service';

import { GitHubUser } from '../../../models/GitHubUser';
import { Error } from '../../../models/Error';

import "rxjs/Rx";

import { BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-githubsearch',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class GitHubSearchComponent implements OnInit {

  public searchText: Subject<string> = new Subject<string>();

  isLoading: boolean = false;
  error: Error;

  searchedUser: string;

  constructor(public githubservice: GithubService) {
    console.warn("GitHubSearch component initialized...");
  }

  ngOnInit() {
    // register for the search event after wating (debounce and distinct)
    this.searchChanged(this.searchText).subscribe(
      query => {
        this.searchedUser = query,
        this.searchUsers(query)
      }
    );
  }

  // search users after event is triggered
  private searchUsers(query: string) {
    if (!query || query === "") return;
    this.isLoading = true;
    this.githubservice.searchUsers(query)
    .finally(() => this.isLoading = false)
    .subscribe(
      _ => { this.error = null },
      e => { this.searchedUser = "", this.githubservice.users = null, this.error = e }
    );
  }

  // wait until next search will be initialized
  private searchChanged(terms: Observable<string>) {
    return terms.debounceTime(500).distinctUntilChanged();
  }

}
