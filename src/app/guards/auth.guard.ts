import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const { islogged } = authService;

  console.log('guard', islogged);

  if (!islogged) {
    router.navigateByUrl('/');
    return false;
  }
  
  return true;
};
