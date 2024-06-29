// src/app/services/login.service.ts

import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/authentication';
  }


  isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token');
    // Aquí podrías verificar la validez del token, por simplicidad asumimos que si hay un token, el usuario está autenticado.
    return of(!!token);
  }

  getUserRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role || '';
  }

}
