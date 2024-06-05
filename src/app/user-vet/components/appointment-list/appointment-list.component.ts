import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  @Input() appointments: {
    day: string;
    time: string;
    name: string;
    icon: string;
  }[] = [];
}
