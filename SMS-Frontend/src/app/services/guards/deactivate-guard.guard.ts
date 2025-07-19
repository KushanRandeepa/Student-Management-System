import { CanDeactivateFn } from '@angular/router';

export const deactivateGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
