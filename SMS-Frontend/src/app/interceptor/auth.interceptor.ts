import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/storage/LocalStorageService';
import { R, T } from '@angular/cdk/keycodes';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storageServce=inject(LocalStorageService);
  const token=storageServce.getAuthToken();
  if(token && !isAuthRequest(req)){
  req=addToken(req,token)

  }
  return next(req);

  function addToken(req:HttpRequest<any>,token :string|null){
    return req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`, 
      },
    })
  }

  function isAuthRequest(req:HttpRequest<any>){
    return req.url.includes('auth');
  }



};
