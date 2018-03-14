import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubComponent } from './github.component';
import { GitHubSearchComponent } from './search/search.component';
import { GitHubProfileComponent } from './profile/profile.component';

const gitHubRoutes: Routes = [
  { path: 'github', component: GitHubSearchComponent },
  { path: 'github/search', component: GitHubSearchComponent },
  { path: 'github/:name', component: GitHubProfileComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(gitHubRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class GitHubRoutingModule { }