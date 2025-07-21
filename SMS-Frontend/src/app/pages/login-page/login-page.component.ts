import { Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponce } from '../../models/LoginRequest';
import { AuthService } from '../../services/auth-service.service';
import { LocalStorageService } from '../../services/storage/LocalStorageService';

@Component({
  selector: 'app-login-page',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private form_builder = inject(FormBuilder)
  private authService=inject(AuthService)

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = this.form_builder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onLogin() {
    if (this.loginForm.valid) {
        const loginReq: LoginRequest = {
          username: this.loginForm.get('username')?.value as string,
          password: this.loginForm.get('password')?.value as string
        }
        console.log(loginReq);
        this.authService.login(loginReq);
    } else {
      alert("enter Useranme and Password");
    }
  }

  logOut(){
    
  }


}
