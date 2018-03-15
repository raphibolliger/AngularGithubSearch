import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './github.component';
import { GitHubSearchComponent } from './search/search.component';
import { GitHubProfileComponent } from './profile/profile.component';

import { GithubService } from '../../services/github.service';

const gitHubRoutes: Routes = [
  { path: 'github', component: GitHubSearchComponent },
  { path: 'github/search', component: GitHubSearchComponent },
  { path: 'github/:name', component: GitHubProfileComponent }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(gitHubRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    GithubComponent,
    GitHubSearchComponent,
    GitHubProfileComponent
  ],
  providers: [ GithubService ]
})

export class GitHubModule {}