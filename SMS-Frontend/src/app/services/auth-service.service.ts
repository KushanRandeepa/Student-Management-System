import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from './storage/LocalStorageService';
import { LoginRequest, LoginResponce } from '../models/LoginRequest';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private readonly BASE_URL='http://localhost:8080/auth';
   http=inject(HttpClient)
   router=inject(Router)
   storageService=inject(LocalStorageService);
  
   constructor() {}

   login(request:LoginRequest){
    
    this.http.post<LoginResponce>(`${this.BASE_URL}/login`,request).subscribe({
      next:(res)=>{
        confirm('Login Success')
        this.storageService.setAuthdata(res.token,res.refreshToken)
        this.router.navigateByUrl('/student-dashboard')
      },
      error:(error)=>{
        alert('loginerror'+error)
      }
    });
   }

}
// 'http://localhost:8080/auth/login'

// pipe(tap((response)=>{
//      
//     }))