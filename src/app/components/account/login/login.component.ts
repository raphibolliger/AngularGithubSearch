import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoginViewModel } from '../../../models/LoginViewModel';

@Component({
  selector: 'app-accountlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AccountLoginComponent implements OnInit {

  isLoading: boolean = false;

  loginViewModel: LoginViewModel = {
    email: "",
    password: ""
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(): void {
    this.isLoading = true;
    this.authService.login(this.loginViewModel)
      .finally(() => this.isLoading = false)
      .subscribe();
  }

}
