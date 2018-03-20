import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.loadUsers().subscribe();
  }

}
