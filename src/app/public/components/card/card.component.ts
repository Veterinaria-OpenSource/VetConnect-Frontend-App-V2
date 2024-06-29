import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IVetCenter } from '../../../user-pet/models/vet-centers/vet-center.entity';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() vetCenter: IVetCenter = {} as IVetCenter;
  constructor(private router: Router) {}

  isOnMainRoute(): boolean {
    return this.router.url === '/user-dashboard';
  }
  isOnMainRouteNotPayment(): boolean {
    return this.router.url === '/user-dashboard';
  }
}
