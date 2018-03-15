import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { SpeedControlCamera } from '../models/SpeedControlCamera';

@Injectable()
export class SpeedcontrolService {

  private url:string = "https://speedcontrolwarning.azurewebsites.net/api/GetSpeedControlCameras?code=qhzjqxkNI9H0kDhJBdZbJpzHpvaThS8n/MfGWe1XV0Mxx5/H5XlKHg==";

  constructor(private http: HttpClient) { }

  getCameras() {
    console.log("load all active cameras");
    return this.http.get<SpeedControlCamera[]>(this.url);
  }

}