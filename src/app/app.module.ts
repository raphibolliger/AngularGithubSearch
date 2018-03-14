import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";

import { GithubService } from './services/github.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SemanticDropdownDirective } from './directives/dropdown';
import { GitHubSearchComponent } from './components/github/search/search.component';
import { GitHubProfileComponent } from './components/github/profile/profile.component';
import { GithubComponent } from './components/github/github.component';
import { GitHubRoutingModule } from './components/github/github.routing.module';
import { GitHubModule } from './components/github/github.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    GitHubModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GithubComponent,
    NotfoundComponent,
    SemanticDropdownDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }