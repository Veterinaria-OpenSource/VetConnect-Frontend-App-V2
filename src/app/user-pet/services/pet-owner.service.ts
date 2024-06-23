import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { IPetOwners } from '../models/pet-owners/pet-owners';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetOwnerService extends BaseService<IPetOwners>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/pet-owners';
   }
}
