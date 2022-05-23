import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private xsrfToken: HttpXsrfTokenExtractor
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const xsrfToken = this.xsrfToken.getToken() as string;
    const token = xsrfToken ? xsrfToken : ' nic';
    console.log(xsrfToken);
    const newRequest = request.clone({
      setHeaders: { 'X-XSRF-TOKEN': token },
    });
    return next.handle(newRequest);
  }
}
