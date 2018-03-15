import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-accountlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AccountLoginComponent implements OnInit {

  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    this.isLoading = true;
    this.authService.login()
      .finally(() => this.isLoading = false)
      .subscribe(r => {
        if (this.authService.isLoggedIn) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/account';
  
          // Set our navigation extras object
          // that passes on our global query params and fragment
          let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };
  
          // Redirect the user
          this.router.navigate([redirect], navigationExtras);
        }
      });
  }

}
