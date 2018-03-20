import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  public users: User[];

  constructor(private http: HttpClient) { }

  public loadUsers(): Observable<any> {
    return this.http.get<User[]>("https://localhost:44372/v1/users").map(response => this.users = response);
  }

}
