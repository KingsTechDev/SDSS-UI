import {ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InterceptorService} from '../core/interceptor/interceptor.service';
import {COMMON_COMPONENTS} from './shared.compotents';

@NgModule({
  imports: [HttpClientModule,
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  ],
  declarations: COMMON_COMPONENTS,
  exports: [CommonModule, ReactiveFormsModule, FormsModule, ],
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
      ]
    };
  }
}
