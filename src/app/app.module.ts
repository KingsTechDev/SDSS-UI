import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error500Component } from './static/error-page/error500/error500.component';
import { Error403Component } from './static/error-page/error403/error403.component';
import { HomeComponent } from './static/home/home.component';
import { DashboardComponent } from './static/dashboard/dashboard.component';
import {Error404Component} from './static/error-page/error404/error404.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NavBarComponent } from './static/nav-bar/nav-bar.component';
import {AuthGuard} from './core/guard/auth.guard';
import {AuthService} from './core/services/auth.service';
import {InterceptorService} from './core/interceptor/interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CORE_SERVICES} from './core/core.services';
import { LoginPortalComponent } from './static/login-portal/login-portal.component';
import {LoginComponent} from './static/login-portal/login/login.component';
import {RecoveryComponent} from './static/login-portal/recovery/recovery.component';
import {ResetPasswordComponent} from './static/login-portal/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    Error500Component,
    Error403Component,
    HomeComponent,
    DashboardComponent,
    NavBarComponent,
    ResetPasswordComponent,
    RecoveryComponent,
    LoginPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    SharedModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthGuard,
    AuthService,
    ...CORE_SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
