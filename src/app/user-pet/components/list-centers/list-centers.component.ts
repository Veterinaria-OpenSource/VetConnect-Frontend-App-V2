import { Component, OnInit } from '@angular/core';
import { IVetCenter } from '../../models/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'list-centers',
  templateUrl: './list-centers.component.html',
  styleUrls: ['./list-centers.component.css'],
})
export class ListCentersComponent implements OnInit {
  vetCenters: IVetCenter[] = [];


  constructor(private apiVetCenterService: VetCenterService) {}

  private getAllVetCenters() {
    this.apiVetCenterService.getVetCenters().subscribe((vetCenters: any) => {
      this.vetCenters = vetCenters;
    });
  }

  ngOnInit(): void {
    this.getAllVetCenters();
  }

  trackById(index: number, item: IVetCenter): number {
    return item.id;
  }
}
