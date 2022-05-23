import { Observable } from 'rxjs';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface User {
  name:string;
  email:string;
  password:string;

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private url:string ='http://localhost:8000/user/create';
private tokenUrl = 'http://localhost:8000/api/user';
  constructor(private http:HttpClient) { }

  createUser(user:User):Observable<User> {
    //this.http.get(this.tokenUrl).subscribe();
    return this.http.post<User>(this.url,user);

  }
}
