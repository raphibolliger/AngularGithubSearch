import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class AccountPasswordResetComponent implements OnInit {

  public isLoading: boolean = false;

  public resetPasswordModel = {
    'password' : "",
    'confirmPassword' : "",
    'email' : "",
    'code' : "",
  }

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        if (!params['email'] || !params['code']){
          this.router.navigate(['/notfound']);
        }

        this.resetPasswordModel.email = params['email'];
        this.resetPasswordModel.code = params['code'];
      });
  }

  public resetPassword(): void {
    this.isLoading = true;
    this.accountService.resetPassword(this.resetPasswordModel)
      .finally(() => this.isLoading = false)
      .subscribe(
        success => this.router.navigate(['/account/login'])
      );
  }

}
