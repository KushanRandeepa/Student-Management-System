import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

export interface IDeactivateGuard{
    canDeactivate():boolean;
}
@Injectable({  
      providedIn:"root"
})
export class DeactivateGuardGuard implements CanDeactivate<IDeactivateGuard>{

  canDeactivate(component: IDeactivateGuard, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
   return component.canDeactivate();
  }

}
// export const deactivateGuardGuard: CanDeactivateFn<IDeactivateGuard> = (component, currentRoute, currentState, nextState) => {
//   return true;
// };
