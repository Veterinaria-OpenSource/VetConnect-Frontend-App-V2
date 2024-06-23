import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/authentication';
   }

   registerUser(data: any) {
    return this.http.post<any>(`${this.basePath}${this.resourceEndpoint}/sign-up`, data, this.httpOptions)
   }
}
