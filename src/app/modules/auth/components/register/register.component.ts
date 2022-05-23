import { AuthService, User } from './../../../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _fb: FormBuilder,private authService:AuthService) {}

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      user: [''],
      email: [''],
      password: [''],
    });
  }

  register() {
    console.log('register');
    const newUser:User = {
      name: this.registerForm.get('user')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('user')?.value,
    };
    this.authService.createUser(newUser).subscribe(user => { console.log(user)});

  }
}
