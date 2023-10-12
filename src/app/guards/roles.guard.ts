import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const rolesGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const { islogged } = authService;
  const { role, redirect } = route.data;
  console.log(state)

  if (islogged) {
    router.navigateByUrl(redirect);
    return false;
  }

  return true;
};
