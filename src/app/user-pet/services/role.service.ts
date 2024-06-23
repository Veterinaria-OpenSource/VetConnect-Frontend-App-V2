import { Injectable } from "@angular/core";
import { BaseService } from "../../shared/services/base.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IPetOwners } from "../models/pet-owners/pet-owners";
import { Observable } from "rxjs";

@Injectable({
  providedIn
    : 'root'
})

export class RoleService extends BaseService<IPetOwners>
{
  constructor(http: HttpClient)
  {
    super(http);
    this.resourceEndpoint = '/roles';
  }

  getRoles(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(this.basePath, { headers });
  }
}