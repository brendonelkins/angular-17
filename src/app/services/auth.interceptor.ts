import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

//HttpInterceptorFn?

import { AuthService } from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = localStorage.getItem('token');

  if (authService.isAuthenticated() && token) {
    //clone?
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(clonedRequest);
  }

  return next(req);
};
