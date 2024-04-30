import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { IVetCenter } from '../models/vet-center.entity';

@Injectable({
  providedIn: 'root',
})
export class VetCenterService extends BaseService<IVetCenter> {
  constructor(http: HttpClient) {
    super(http);
    // this.vetCenterEndpoint = '';
  }
}
