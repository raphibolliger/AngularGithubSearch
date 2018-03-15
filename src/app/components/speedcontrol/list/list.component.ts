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
  public cameras: SpeedControlCamera[];

  constructor(private speedControlCameraService: SpeedcontrolService) { }

  ngOnInit() {
    this.isLoading = true;
    this.speedControlCameraService.getCameras()
      .finally(() => this.isLoading = false)
      .subscribe(
        c => { this.cameras = c }
      );
  }

}
