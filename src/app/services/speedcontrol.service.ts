import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { SpeedControlCamera } from '../models/SpeedControlCamera';

@Injectable()
export class SpeedcontrolService {

  private url:string = "https://localhost:44372/v1/speedcontrol/list";

  constructor(private http: HttpClient) { }

  getCameras() {
    console.log("load all active cameras");
    return this.http.get<SpeedControlCamera[]>(this.url);
  }

}