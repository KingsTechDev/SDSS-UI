import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ENV} from '../config/env.config';
import {AuthenticationRequest} from '../model/authentication-request';
import {isNullOrUndefined} from 'util';
import {LocalstorageService} from './localstorage.service';
import {SDSS_CONSTANTS} from '../constants/sdss-contants';

@Injectable()
export class AuthService {

  redirectUrl: string;
  private baseUrl = `${ENV.BASE_URI}/authentication/login`;
  private resetPass = `${ENV.BASE_URI}/authentication/reset`;
  private recoverPass = `${ENV.BASE_URI}/authentication/recover`;

  constructor(private http: HttpClient,
              private router: Router,
              private localstorageService: LocalstorageService) {
  }

  tokenPresence(): any {
    const token = this.localstorageService.getItem(SDSS_CONSTANTS.ACTIVE_USER);
    return !isNullOrUndefined(token);
  }
  getToken(): any {
    if (!this.tokenPresence()) {
      this.router.navigate(['/sdss-portal/login']);
      return null;
    }
    return this.localstorageService.getItem(SDSS_CONSTANTS.ACTIVE_USER);
  }

  authenticate(authenticationRequest: AuthenticationRequest) {
    return this.http.post(this.baseUrl, authenticationRequest);
  }

  passRecovery(username: string) {
    return this.http.get(this.recoverPass + '/' + username);
  }

  passReset(data) {
    return this.http.post(this.resetPass, data);
  }

  isAuthenticated = (): boolean => this.tokenPresence();

  logOut(): void {
    localStorage.removeItem(SDSS_CONSTANTS.ACTIVE_USER);
    localStorage.removeItem('userName');
    this.router.navigate(['/sdss-portal/login']);
  }
}
