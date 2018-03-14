import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { GitHubUser } from '../../../models/GitHubUser';
import { GitHubRepo } from '../../../models/GitHubRepo';
import { GithubService } from '../../../services/github.service';
import { Error } from '../../../models/Error';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class GitHubProfileComponent implements OnInit {

  error: Error;
  isLoading: boolean = false;

  userName: string;
  user: GitHubUser;
  repos: GitHubRepo[];

  constructor(private githubservice: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(x => {
        this.userName = x.get('name'),
          this.loadGitHubProfile(this.userName)
      });
  }

  private loadGitHubProfile(userName: string): void {

    // load user with details
    this.githubservice.getUser(userName)
      .finally(() => this.isLoading = false)
      .subscribe(
        u => { this.user = u, this.error = null },
        e => { this.error = e, this.user = null }
      );

    // load all repositories from user
    this.githubservice.getRepos(userName)
      .finally(() => this.isLoading = false)
      .subscribe(
        r => { this.repos = r, this.error = null },
        e => { this.error = e, this.repos = [] }
      );

  }

}
