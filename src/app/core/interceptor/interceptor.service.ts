import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs/internal/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorization = this.authService.getToken().token;
    if (authorization) {
      const authRequest = request.clone(
        {
          setHeaders:
            {
              Authorization: `${authorization}`
            }
        });
      return next.handle(authRequest).pipe(tap(event => {
        if (event instanceof HttpResponse) {
        }

      }, error => {
        if (error instanceof HttpResponse) {
        }
      }));
    } else {
      const authRequest = request.clone({});
      return next.handle(authRequest);
    }
  }
}
