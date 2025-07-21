import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './storage/LocalStorageService';
import { LoginRequest, LoginResponce } from '../models/LoginRequest';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { DecodeToken } from '../models/DecodeToken';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly BASE_URL = 'http://localhost:8080/auth';
  http = inject(HttpClient)
  router = inject(Router)
  storageService = inject(LocalStorageService);
  constructor() { }

  login(request: LoginRequest) {
    this.http.post<LoginResponce>(`${this.BASE_URL}/login`, request).subscribe({
      next: (res) => {
        confirm('Login Success')
        this.storageService.setAuthdata(res.token, res.refreshToken)

        const decoder: DecodeToken = jwtDecode(res.token)

        if (decoder.Role === 'ADMIN') {
          this.router.navigateByUrl('/admin-dashboard')

        } else if (decoder.Role === 'TEACHER') {
          this.router.navigateByUrl('/teacher-dashboard')
        } else {
          this.router.navigateByUrl('/student-dashboard')
        }
      },
      error: (error) => {
        alert('loginerror' + error)
      }
    });
  }

  logout() {
    this.storageService.removeAuthdata();
    this.router.navigateByUrl('');

  }
  refrshToken() {
    const refreshToken = this.storageService.getRefreshToken();
    console.log({ refreshToken }); // Should print { refreshToken: '...' }

    return this.http.post<LoginResponce>(`${this.BASE_URL}/refresh`, { refreshToken: refreshToken }).pipe(
      tap((response) => {
        console.log(' token refrsh successfull ', response)
        this.storageService.setAuthdata(response.token, response.refreshToken);
      }),
      catchError((error) => {
        console.log('token refresh faild', error)
        this.storageService.removeAuthdata()
        this.router.navigateByUrl('login')
        return throwError(() => error);
      }))
  }


  getUserRole() {
    const token = this.storageService.getAuthToken();
    if (!token) return null;
    const decoder: DecodeToken = jwtDecode(token)
    return decoder.Role;
  }
  getUserId() {
    const token = this.storageService.getAuthToken();
    if (!token) return null;
    const decoder: DecodeToken = jwtDecode(token)
    return decoder.customId;
  }

}
