import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVetCenter } from '../../models/vet-center.entity';
import { VetCenterService } from '../../services/vet-center.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paramsId: string = '';
  vetCenter: IVetCenter = {} as IVetCenter;
  textReceived?: string = '';

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

  textReceive($event: string) {
    this.textReceived = $event;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.paramsId = params['id'];
    });
    const paramsId = this.paramsId;
    this.getVetCenterById(paramsId);
  }
}
