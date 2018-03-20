import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class AccountChangePasswordComponent implements OnInit {

  public isLoading: boolean = false;
  public passwordChangeModel = {
    email: "",
    actualPassword: "",
    password: "",
    confirmPassword: ""
  }

  constructor(private authService: AuthService, private accountService: AccountService) { }

  ngOnInit() {
    this.passwordChangeModel.email = this.authService.user.email;
  }

  public changePassword(): void {
    this.accountService.changePassword(this.passwordChangeModel)
      .finally(() => this.isLoading = false)
      .subscribe(
        _ => this.authService.logout()
      );
  }

}
