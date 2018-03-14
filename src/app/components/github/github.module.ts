import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { GitHubRoutingModule } from './github.routing.module';
import { GitHubSearchComponent } from './search/search.component';
import { GitHubProfileComponent } from './profile/profile.component';

import { GithubService } from '../../services/github.service';
 
@NgModule({
  imports: [
    CommonModule,
    GitHubRoutingModule
  ],
  declarations: [
    GitHubSearchComponent,
    GitHubProfileComponent
  ],
  providers: [ GithubService ]
})

export class GitHubModule {}