import { Component, Input } from '@angular/core';

@Component({
  selector: 'time-card',
  templateUrl: './time-card.component.html',
  styleUrl: './time-card.component.css',
})
export class TimeCardComponent {
  @Input() vetCenter: any;
}
