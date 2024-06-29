// src/app/authguard/auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const role = this.authenticationService.getRole();
    const expectedRole = route.data['role'];

    if (role && expectedRole && role === expectedRole) {
      return true;
    }

    // Redirige al login si el usuario no tiene el rol adecuado
    this.router.navigate(['/login']);
    return false;
  }
}
