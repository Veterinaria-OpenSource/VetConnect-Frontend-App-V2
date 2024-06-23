// src/app/services/login.service.ts

import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/authentication';
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http
      .post<any>(`${this.basePath}${this.resourceEndpoint}/sign-in`, credentials, this.httpOptions)
      .pipe(
        map((response: any) => {
          // Guardar el token
          localStorage.setItem('token', response.token);
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
}
