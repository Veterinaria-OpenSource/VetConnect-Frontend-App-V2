import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() vetCenter: any;
  constructor(private router: Router) {}

  isOnMainRoute(): boolean {
    return this.router.url === '/';
  }
}
