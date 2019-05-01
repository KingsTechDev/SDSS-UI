
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JSS_COMPONENTS, JSS_ROUTES, JSS_SERVICES} from './jss-route.section';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const JssRoutes: Routes = [
  ...JSS_ROUTES
];

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(JssRoutes)
  ],
  declarations: [...JSS_COMPONENTS],
  exports: [...JSS_COMPONENTS],
  providers: [...JSS_SERVICES]
})
export class JssModule {
}
