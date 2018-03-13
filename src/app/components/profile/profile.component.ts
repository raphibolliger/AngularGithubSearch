import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { GitHubUser } from '../../models/GitHubUser';
import { GitHubRepo } from '../../models/GitHubRepo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: GitHubUser;
  @Input() repos: GitHubRepo[];

  constructor() {

  }

  ngOnInit() {
    
  }

}
