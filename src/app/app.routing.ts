import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GithubComponent } from './components/github/github.component';

const appRoutes: Routes = [
  { path: '', component: GithubComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}