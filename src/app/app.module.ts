import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { GitHubModule } from './components/github/github.module';
import { AccountModule } from './components/account/account.module';

import { GithubComponent } from './components/github/github.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SemanticDropdownDirective } from './directives/dropdown';
import { SpeedcontrolModule } from './components/speedcontrol/speedcontrol.module';
import { TokenInterceptor, httpInterceptorProviders } from './helpers/AuthInterceptor';
import { UsersModule } from './components/users/users.module';

const appRoutes: Routes = [
  { path: '', component: GithubComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false } ), // <-- debugging purposes only
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GitHubModule,
    SpeedcontrolModule,
    AccountModule,
    UsersModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    NotfoundComponent,
    SemanticDropdownDirective
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }