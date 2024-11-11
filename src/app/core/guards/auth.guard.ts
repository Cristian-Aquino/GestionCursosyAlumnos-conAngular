import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authServicio = inject(AuthService);
  const router = inject(Router);


  return authServicio.verificarToken().pipe(map((esValido) => esValido || router.createUrlTree(["auth", "login"])));
};
