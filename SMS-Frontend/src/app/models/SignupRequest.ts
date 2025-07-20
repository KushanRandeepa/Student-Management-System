import { Injectable } from "@angular/core";

Injectable({
  providedIn: 'root'
})
export interface SignupRequest {
  username: string ;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}
