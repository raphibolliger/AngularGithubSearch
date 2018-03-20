import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class AccountPasswordForgotComponent implements OnInit {

  public isLoading: boolean = false;
  public emailAdress: string;
  public success: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    
  }

  public sendResetLink(): void {
    this.isLoading = true;
    this.accountService.passwordForgot(this.emailAdress)
      .finally(() => this.isLoading = false)
      .subscribe(
        _ => { this.success = true; }
      );
  }

}
