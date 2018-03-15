import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './github.component';
import { GitHubSearchComponent } from './search/search.component';
import { GitHubProfileComponent } from './profile/profile.component';

import { GithubService } from '../../services/github.service';
import { AuthGuard } from '../../services/auth.guard';

const gitHubRoutes: Routes = [
  {
    path: 'github',
    component: GithubComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: GitHubSearchComponent },
      { path: 'search', component: GitHubSearchComponent },
      { path: ':name', component: GitHubProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gitHubRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    GithubComponent,
    GitHubSearchComponent,
    GitHubProfileComponent
  ],
  providers: [GithubService]
})

export class GitHubModule { }