import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    exports: [
        AuthComponent
    ]
})

export class AuthModule { }