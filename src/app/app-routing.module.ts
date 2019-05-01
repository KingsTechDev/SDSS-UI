import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Error404Component} from './static/error-page/error404/error404.component';
import {Error500Component} from './static/error-page/error500/error500.component';
import {Error403Component} from './static/error-page/error403/error403.component';
import {HomeComponent} from './static/home/home.component';
import {DashboardComponent} from './static/dashboard/dashboard.component';
import {AuthGuard} from './core/guard/auth.guard';
import {LoginComponent} from './static/login-portal/login/login.component';

const ApppRoutes: Routes = [

  {path: 'sdss-portal', children: [
    {path: 'login', component: LoginComponent},
    {path: 'error-404', component: Error404Component},
    {path: 'error-500', component: Error500Component},
    {path: 'error-403', component: Error403Component},

    {path: '', component: HomeComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'junior-section', loadChildren: './modules/jss/jss.module#JssModule'},
      {path: 'senior-section', loadChildren: './modules/sss/sss.module#SssModule'},
      {path: 'mgt-section', loadChildren: './modules/mgt/mgt.module#MgtModule'},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
      pathMatch: 'prefix', canActivate: [AuthGuard], canActivateChild: [AuthGuard]
    }
  ]},
  {path: '', redirectTo: 'sdss-portal', pathMatch: 'full'},
  {path: '**', component: Error403Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ApppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
