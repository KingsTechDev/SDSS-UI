
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MGT_ROUTES, MGT_SERVICES, MTG_COMPONENTS} from './mtg-route.section';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const MgtRoutes: Routes = [
  ...MGT_ROUTES
];

@NgModule({
  imports: [
    SharedModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(MgtRoutes)
  ],
  declarations: [...MTG_COMPONENTS],
  exports: [...MTG_COMPONENTS],
  providers: [...MGT_SERVICES]
})
export class MgtModule {}
