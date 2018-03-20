import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private location: Location) { }

  public passwordForgot(email: string): Observable<any> {

    var forgotViewModel = {
      'email': email
    }
    
    return this.http.post<any>("https://localhost:44372/v1/account/forgotpassword", forgotViewModel);
  }

  public resetPassword(passwordResetModel: any): Observable<any> {
    return this.http.post<any>("https://localhost:44372/v1/account/resetpassword", passwordResetModel)
  }

  public changePassword(passwordChangeModel: any): Observable<any> {
    return this.http.post<any>("https://localhost:44372/v1/account/changepassword", passwordChangeModel);
  }

}
