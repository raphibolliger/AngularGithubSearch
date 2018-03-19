import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { SpeedcontrolComponent } from "./speedcontrol.component";
import { SpeedControlDashboardComponent } from './dashboard/dashboard.component';
import { SpeedControlListComponent } from './list/list.component';
import { SpeedcontrolService } from '../../services/speedcontrol.service';

const speedControlRoutes: Routes = [
    {
        path: 'speedcontrol',
        component: SpeedcontrolComponent,
        children: [
            { path: '', component: SpeedControlListComponent },
            { path: 'list', component: SpeedControlListComponent }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(speedControlRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        SpeedcontrolComponent,
        SpeedControlDashboardComponent,
        SpeedControlListComponent
    ],
    providers: [
        SpeedcontrolService
    ]
})

export class SpeedcontrolModule { }