import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { IReviewsVetCenters} from '../models/vet-centers-reviews/reviews-vet-centers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsVetCentersService  extends BaseService<IReviewsVetCenters>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/reviews/vet-center';
   }
}
