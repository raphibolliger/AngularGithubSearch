import { Component, OnInit } from '@angular/core';
import { SpeedcontrolService } from '../../../services/speedcontrol.service';
import { SpeedControlCamera } from '../../../models/SpeedControlCamera';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class SpeedControlListComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(public cameraService: SpeedcontrolService) { }

  ngOnInit() {
    this.loadCameras();
  }

  public loadCameras(): void {
    this.isLoading = true;
    this.cameraService.getCameras()
      .finally(() => this.isLoading = false)
      .subscribe();
  }

}
