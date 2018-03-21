import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.creating = false;
    this.userService.loadUsers()
      .finally(() => this.isLoading = false)
      .subscribe();
  }

}
