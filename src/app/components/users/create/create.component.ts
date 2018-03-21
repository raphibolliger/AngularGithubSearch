import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-usercreate',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class UserCreateComponent implements OnInit {

  public isLoading: boolean = false;

  public userViewModel: User = {
    email: "",
    firstName: "",
    lastName: "",
  }

  constructor(public userService: UserService) {

  }

  ngOnInit() {
  }

  public createUser(): void {
    this.isLoading = true;
    this.userService.createUser(this.userViewModel)
      .finally(() => this.isLoading = false)
      .subscribe(
        success => this.userService.creating = false
      );
  }

}
