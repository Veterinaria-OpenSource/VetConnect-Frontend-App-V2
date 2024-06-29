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
    const token = this.authenticationService.getToken();
    const role = this.authenticationService.getRole();
    const expectedRole = route.data['role'];

    // Check if token is present and valid
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    // Check if role matches the expected role, if defined
    if (expectedRole && role !== expectedRole) {
      this.router.navigate(['/access-denied']);
      return false;
    }

    // Allow access if token is valid and role (if defined) matches
    return true;
  }
}
