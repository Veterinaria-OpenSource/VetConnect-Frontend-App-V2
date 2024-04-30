import {Component, OnInit} from '@angular/core';
import {IVetCenter} from "../../../models/vet-center.entity";
import {ActivatedRoute} from "@angular/router";
import {VetCenterService} from "../../../services/vet-center.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  paramsId: string = '';
  vetCenter: IVetCenter = {} as IVetCenter;
  textReceived?:string ="";

  constructor(
    private route: ActivatedRoute,
    private apiVetCenterService: VetCenterService
  ) {}
  textReceive($event:string){
    this.textReceived=$event;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.paramsId = params['id'];
    });
    const paramsId = this.paramsId;
    this.getVetCenterById(paramsId);
  }

}
