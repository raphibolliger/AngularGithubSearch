import { Component, OnInit } from '@angular/core';
import { SpeedcontrolService } from '../../../services/speedcontrol.service';

@Component({
  selector: 'app-speedcontroldashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class SpeedControlDashboardComponent implements OnInit {

  constructor(private speedControlService: SpeedcontrolService) { }

  ngOnInit() {
  }

}