// auth-bypass.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthBypassService {
  public bypassGuard = false;
}
