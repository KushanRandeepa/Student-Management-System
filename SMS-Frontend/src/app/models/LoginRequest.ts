import { Injectable } from "@angular/core";

export interface LoginRequest{
    username:string;
    password:string;
}

export interface LoginResponce{
    token:string;
    refreshToken:string;
    isLogin:Boolean;
}

export interface Userdata{
    
}