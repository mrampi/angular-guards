import { CanActivateFn } from '@angular/router';

export const saveGuard: CanActivateFn = (route, state) => {
  console.log('saveGuard')
  return true;
};
