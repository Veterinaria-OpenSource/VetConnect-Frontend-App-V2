import { Component, OnInit } from '@angular/core';
import { IVetCenter } from '../../models/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'list-centers',
  templateUrl: './list-centers.component.html',
  styleUrl: './list-centers.component.css',
})
export class ListCentersComponent implements OnInit {
  vetCenters: IVetCenter[] = [];

  constructor(private apiVetCenterService: VetCenterService) {}

  private getAllVetCenters() {
    this.apiVetCenterService.getVetCenters().subscribe((vetCenters: any) => {
      this.vetCenters = vetCenters;
    });
    console.log(this.vetCenters);
  }

  ngOnInit(): void {
    this.getAllVetCenters();
  }
}
