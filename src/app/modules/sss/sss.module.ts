

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SSS_COMPONENTS, SSS_ROUTES, SSS_SERVICES} from './sss-route.section';

const SssRoutes: Routes = [
  ...SSS_ROUTES
];

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(SssRoutes)
  ],
  declarations: [...SSS_COMPONENTS],
  exports: [...SSS_COMPONENTS],
  providers: [...SSS_SERVICES]
})

export class SssModule {}
