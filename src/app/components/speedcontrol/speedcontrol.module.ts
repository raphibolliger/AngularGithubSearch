import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { SpeedcontrolComponent } from "./speedcontrol.component";

const speedControlRoutes: Routes = [
    { path: 'speedcontrol', component: SpeedcontrolComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(speedControlRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        SpeedcontrolComponent
    ],
    providers: [
    ]
})

export class SpeedcontrolModule { }