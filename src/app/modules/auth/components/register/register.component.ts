import { CookieService } from 'ngx-cookie-service';
import { AuthService, User } from './../../../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _fb: FormBuilder,private _authService:AuthService,private _cookie:CookieService) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      user: [''],
      email: [''],
      password: [''],
    });
  }
  handleError(error:string) {

  }
  register() {
    //console.log('register');
    const newUser:User = {
      name: this.registerForm.get('user')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('user')?.value,
    };
    this._authService.createUser(newUser).subscribe(token => {console.log(token)});

  }
}
