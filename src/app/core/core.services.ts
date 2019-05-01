import {Provider} from '@angular/core';
import {LocalstorageService} from './services/localstorage.service';

export const CORE_SERVICES: Array<Provider> = [
  LocalstorageService
];
