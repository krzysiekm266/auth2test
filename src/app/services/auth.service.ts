import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export interface User {
  name:string;
  email:string;
  password:string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url:string ='http://localhost:8000/api/user/store';
private urlLogin:string ='http://localhost:8000/api/auth/login';
private tokenUrl = 'http://localhost:8000/sanctum/csrf-cookie';
  constructor(private http:HttpClient,private cookieService:CookieService) { }

  createUser(user:User):Observable<User> {
    return this.http.post<any>(this.url,user);

  }

  login(credentials:any) {

    return this.http.post<any>(this.urlLogin,credentials);
  }
}
