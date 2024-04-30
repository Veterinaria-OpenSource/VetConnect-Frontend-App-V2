import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVetCenter } from '../../models/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'app-vet-center-detail',
  templateUrl: './vet-center-detail.component.html',
  styleUrl: './vet-center-detail.component.css',
})
export class VetCenterDetailComponent implements OnInit {
  paramsId: string = '';
  vetCenter: IVetCenter = {} as IVetCenter;
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
