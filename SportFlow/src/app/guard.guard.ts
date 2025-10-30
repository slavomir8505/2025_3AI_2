import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

export const guardGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    map(user => {
      if (user) {
        return true; // používateľ prihlásený → povolený prístup
      } else {
        router.navigate(['/login']); // neprihlásený → presmerovanie na login
        return false;
      }
    })
  );
};
