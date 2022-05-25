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
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserInterceptor implements HttpInterceptor {
  constructor(private _token:HttpXsrfTokenExtractor) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token:string  = this._token.getToken() as string;
    const newRequest = request.clone({
      setHeaders:{
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials':'true',
        'X-XSRF-TOKEN': token,
    }
    });

    return next.handle(newRequest);
  }
}
