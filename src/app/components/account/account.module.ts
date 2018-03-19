import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account.component';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';

const accountRoutes: Routes = [
    { path: 'account', component: AccountProfileComponent },
    { path: 'account/profile', component: AccountProfileComponent },
    { path: 'account/login', component: AccountLoginComponent }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forRoot(accountRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AccountComponent,
        AccountLoginComponent,
        AccountProfileComponent
    ],
    providers: [
        AuthService,
        AuthGuard
    ]
})

export class AccountModule { }