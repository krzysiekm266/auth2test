import { AuthService } from './../../../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder,private _authService:AuthService) {}

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['quest@quest.pl'],
      password: ['quest'],
    });
  }

  login() {
    const credentials = {
     'email': this.loginForm.get('email')?.value as string,
     'password':this.loginForm.get('password')?.value as string,
    };
    this._authService.login(credentials).subscribe();
  }
}
