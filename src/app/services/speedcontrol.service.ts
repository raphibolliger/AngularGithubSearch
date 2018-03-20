import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { SpeedControlCamera } from '../models/SpeedControlCamera';

@Injectable()
export class SpeedcontrolService {

  public cameras: SpeedControlCamera[];

  constructor(private http: HttpClient) { }

  getCameras() {
    return this.http.get<SpeedControlCamera[]>("https://localhost:44372/v1/speedcontrol/list").map(res => this.cameras = res);
  }

}