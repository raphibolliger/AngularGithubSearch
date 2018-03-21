import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  // ui controls
  public creating: boolean = false;

  // data stors
  public users: User[];

  constructor(private http: HttpClient) { }

  public loadUsers(): Observable<any> {
    return this.http.get<User[]>("https://localhost:44372/v1/users").map(response => this.users = response);
  }

  public createUser(user: User): Observable<any> {
    return this.http.post<User>("https://localhost:44372/v1/account/register", user).map(response => this.users.push(response));
  }

}
