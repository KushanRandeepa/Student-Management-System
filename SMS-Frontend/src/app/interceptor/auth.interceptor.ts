import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../services/storage/LocalStorageService';
import { R, T } from '@angular/cdk/keycodes';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storageServce = inject(LocalStorageService);
  const token = storageServce.getAuthToken();
  const authService = inject(AuthService);
  if (token && !isAuthRequest(req)) {
    req = addToken(req, token)

  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        return handle401Error(req, next, authService)
      }
      return throwError(() => error)
    })
  );

  function addToken(req: HttpRequest<any>, token: string | null) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  function isAuthRequest(req: HttpRequest<any>) {
    return req.url.includes('auth');
  }




  function handle401Error(
    request: any,
    next: HttpHandlerFn,
    authService: AuthService)
     {
    return authService.refrshToken().pipe(
      switchMap((response) => {
        return next(
          request.clone({
            setHeaders: {
              Authorization: `Bearer ${response.token}`,
            },
          })
        )
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )

  }
}
// };
// .subscribe({
//       next: (res) => {
//         confirm('Token Refrsh  Success')
//         this.storageService.setAuthdata(res.token, res.refreshToken)
//         // this.router.navigateByUrl('/student-dashboard')
//       },
//       error: (error) => {
//         alert('Refrsh Token failed' )
//         console.log(error)
//       }
//     });