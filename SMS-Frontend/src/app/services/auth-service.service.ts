import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './storage/LocalStorageService';
import { LoginRequest, LoginResponce } from '../models/LoginRequest';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { DecodeToken } from '../models/DecodeToken';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginState = new BehaviorSubject<boolean>(false);
  public isLoggingIn$ = this.loginState.asObservable();
  private readonly BASE_URL = 'http://localhost:8080/auth';
  http = inject(HttpClient)
  route = inject(Router)
  storageService = inject(LocalStorageService);

  constructor() { }

  setLoggingIn(value: boolean) {
    this.loginState.next(value);
  }

  login(request: LoginRequest) {
    this.setLoggingIn(true);
    this.http.post<LoginResponce>(`${this.BASE_URL}/login`, request).subscribe({
      next: async (res) => {
        if (res.token != null) {
          this.storageService.setAuthdata(res.token, res.refreshToken)
          const decoder: DecodeToken = jwtDecode(res.token)

          let redirectUrl = '/student-dashboard'
          if (decoder.Role === 'ADMIN') {
            redirectUrl = '/admin-dashboard'
          } else if (decoder.Role === 'TEACHER') {
            redirectUrl = '/teacher-dashboard'
          }
          await this.route.navigateByUrl(redirectUrl);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login completed successfully",
            showConfirmButton: false,
            timer: 1500
          });

          this.setLoggingIn(false);
        } else {
          this.setLoggingIn(true); // show spinner or loading view
          this.storageService.removeAuthdata();

          setTimeout(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Login failed: Invalid Username or password.",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
            this.setLoggingIn(false);
            this.route.navigateByUrl('/login');
          }, 500);
        }
      },
      error: (error) => {
        alert('loginerror' + error)
        this.setLoggingIn(false);
      }
    });
  }



  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout !"
    }).then((result) => {
 this.storageService.removeAuthdata();
    this.route.navigateByUrl('');
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "You have been logout successfully.",
          icon: "success"
        });
      }
    });
   
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
        this.route.navigateByUrl('login')
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
