import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AccountComponent } from './account.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountPasswordForgotComponent } from './forgot/forgot.component';
import { AccountPasswordResetComponent } from './reset/reset.component';

import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';
import { AccountService } from '../../services/account.service';
import { AccountChangePasswordComponent } from './password/password.component';

const accountRoutes: Routes = [
    {
        path: 'account',
        component: AccountComponent,
        children: [
            { path: '', component: AccountProfileComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: AccountProfileComponent, canActivate: [AuthGuard] },
            { path: 'password', component: AccountChangePasswordComponent, canActivate: [AuthGuard] },
            { path: 'login', component: AccountLoginComponent },
            { path: 'forgot', component: AccountPasswordForgotComponent },
            { path: 'reset', component: AccountPasswordResetComponent }
        ]
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(accountRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AccountComponent,
        AccountLoginComponent,
        AccountProfileComponent,
        AccountPasswordForgotComponent,
        AccountPasswordResetComponent,
        AccountChangePasswordComponent
    ],
    providers: [
        AuthService,
        AccountService,
        AuthGuard
    ]
})

export class AccountModule { }