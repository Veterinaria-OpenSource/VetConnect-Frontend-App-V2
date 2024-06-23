import { Component, OnInit } from '@angular/core';
import { IVetCenter } from '../../models/vet-centers/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'list-centers',
  templateUrl: './list-centers.component.html',
  styleUrls: ['./list-centers.component.css'],
})
export class ListCentersComponent implements OnInit {
  vetCenters: IVetCenter[] = [];
  searchText: string = '';



  constructor(private apiVetCenterService: VetCenterService
  ) {}

  private getAllVetCenters() {
    this.apiVetCenterService.getVetCenters().subscribe((vetCenters: IVetCenter[]) => {
      this.vetCenters = vetCenters;
    });
  }

  ngOnInit(): void {
    this.getAllVetCenters();
  }


  updateSearch(searchText: string): void {
    this.searchText = searchText;
  }

  trackById(index: number, item: IVetCenter): number {
    return item.id;
  }
  
}
