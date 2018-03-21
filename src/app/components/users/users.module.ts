import { NgModule }       from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { UsersComponent } from './users.component';
import { UserListComponent } from './list/list.component';

import { AuthGuard } from '../../services/auth.guard';
import { UserService } from '../../services/user.service';
import { UserCreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const usersRoute: Routes = [
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: UserListComponent }
        ]
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(usersRoute)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserCreateComponent
    ],
    providers: [
        UserService
    ]
})

export class UsersModule { }