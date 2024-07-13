import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService<any> {

  constructor(http: HttpClient, private router: Router) {
    super(http);
    this.resourceEndpoint = "/authentication";
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http
      .post<any>(`${this.basePath}${this.resourceEndpoint}/sign-in`, credentials, this.httpOptions)
      .pipe(
        map((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          const userId = this.parseJwt(response.token).id;
          localStorage.setItem('id', userId); // Guardar el id en localStorage
          return response;
        }),
        catchError((error) => {
          console.error('Error de inicio de sesión:', error);
          if (error.status === 401) {
            return throwError(() => new Error('No autorizado: Usuario o contraseña inválidos.'));
          } else {
            return this.handleError(error);
          }
        })
      );
  }

  signUp(credentials: { username: string; password: string; roles: string[] }): Observable<any> {
    return this.http
      .post<any>(`${this.basePath}${this.resourceEndpoint}/sign-up`, credentials, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): number | null {
    const id = localStorage.getItem('id');
    return id ? +id : null;
  }

  parseJwt(token: string): any {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }
}
