// src/app/shared/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService<any> {

  constructor(http: HttpClient, private router: Router) {
    super(http);
    this.resourceEndpoint = "/authentication";
   }

   // login | sign-in
   login(credentials: { username: string, password: string }): Observable<any> {
    return this.http
      .post<any>(`${this.basePath}${this.resourceEndpoint}/sign-in`, credentials, this.httpOptions)
      .pipe(
        map((response: any) => {
          console.log('Login response:', response); // Imprimir toda la respuesta
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role); // Guardar el rol en localStorage
          console.log('Role stored:', response.role); // Verificar el rol guardado
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

  // register | sign-up
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

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
