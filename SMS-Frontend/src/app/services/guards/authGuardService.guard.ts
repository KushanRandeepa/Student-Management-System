import { ActivatedRouteSnapshot, CanActivate,  Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "../storage/LocalStorageService";

export class AuthGuardService implements CanActivate {
    constructor(private storage: LocalStorageService, private router: Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token = this.storage.getAuthToken();
    if (!token) {
      this.router.navigate(['/login'], { replaceUrl: true });
      return false;
    }
    return true;
  } 
    
}

