import { Injectable } from '@angular/core';
import {isNullOrUndefined} from 'util';
import {SdssUtils} from '../utils/SdssUtils';

@Injectable()
export class LocalstorageService {

  getItem(key: string) {
    if (!isNullOrUndefined(key)) {
      if (SdssUtils.isEmpty(localStorage.getItem(key))) {
        return JSON.parse(localStorage.getItem(key));
      }
    }
    return null;
  }

  saveItem(key: string, data: any) {
    if (!isNullOrUndefined(this.getItem(key))) {
      return localStorage.setItem(key, JSON.stringify(data));
    } else {
      this.removeItem(key);
      return localStorage.setItem(key, JSON.stringify(data));
    }
  }

  removeItem(key: string) {
    if (!isNullOrUndefined(key)) {
      localStorage.removeItem(key);
    }
  }

}
