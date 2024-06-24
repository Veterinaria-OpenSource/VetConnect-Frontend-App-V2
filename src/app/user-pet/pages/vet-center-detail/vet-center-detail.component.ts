import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVetCenter } from '../../models/vet-centers/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'app-vet-center-detail',
  templateUrl: './vet-center-detail.component.html',
  styleUrl: './vet-center-detail.component.css',
})
export class VetCenterDetailComponent implements OnInit {
  paramsId: string = '';
  vetCenter: IVetCenter = {} as IVetCenter;

  // arrays de opiniones (provicional)
  /*reviews = [
    {
      reviewerName: 'Isabel Noriega Torres',
      date: new Date(2023, 3, 1), // Año, mes (0 indexado), día
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat est ut purus euismod, nec varius turpis eleifend. Nunc augue metus laoreet et augue at, molestie vehicula metus. Curabitur volutpat nulla.'
    },
    {
      reviewerName: 'Juan Pérez Gómez',
      date: new Date(2023, 3, 2),
      comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];*/
  
  constructor(
    private route: ActivatedRoute,
    private apiVetCenterService: VetCenterService
  ) {}

  private getVetCenterById(id: string) {
    this.apiVetCenterService
      .getVetCenterById(id)
      .subscribe((vetCenter: any) => {
        this.vetCenter = vetCenter;
      });
  }
 

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.paramsId = params['id'];
    });
    const paramsId = this.paramsId;
    this.getVetCenterById(paramsId);
  }
}
