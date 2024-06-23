import { Component, OnInit } from '@angular/core';
import { IReviewsVetCenters } from '../../models/vet-centers-reviews/reviews-vet-centers';
import { ActivatedRoute } from '@angular/router';
import { ReviewsVetCentersService } from '../../services/reviews-vet-centers.service';
import { IPetOwners } from '../../models/pet-owners/pet-owners';
import { PetOwnerService } from '../../services/pet-owner.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-vet-center-reviews',
  templateUrl: './vet-center-reviews.component.html',
  styleUrl: './vet-center-reviews.component.css'
})
export class VetCenterReviewsComponent implements OnInit {
  
  vetCentersReviews: IReviewsVetCenters[] = [];
  petOwners: Map<number, IPetOwners> = new Map();


  constructor(
    private reviewsVetCentersService: ReviewsVetCentersService,
    private petOwnersService: PetOwnerService,
    private route: ActivatedRoute
  ){
  }

  // Obtener reseñas por id del centro veterinario
  getReviewsByVetCenterId(vetCenterId: number): void {
    this.reviewsVetCentersService.getReviewsByVetCenterId(vetCenterId).subscribe((reviews) => {
      this.vetCentersReviews = reviews;
      this.loadPetOwners();
    });
  }

    // Carga los propietarios de mascotas asociados a las reseñas
    loadPetOwners(): void {
      const petOwnerIds = [...new Set(this.vetCentersReviews.map(review => review.petOwnerId))];
      forkJoin(petOwnerIds.map(id => this.petOwnersService.getPetOwnerById(id)))
        .subscribe(petOwners => {
          petOwners.forEach(petOwner => this.petOwners.set(petOwner.id, petOwner));
        });
    }

    getPetOwnerName(petOwnerId: number): string {
      return this.petOwners.get(petOwnerId)?.name || 'Unknown';
    }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const vetCenterId = Number(id);
        if (!isNaN(vetCenterId)) {
          this.getReviewsByVetCenterId(vetCenterId);
        } else {
          console.error('Invalid vet center ID:', id);
        }
      }
    });

  }
}
