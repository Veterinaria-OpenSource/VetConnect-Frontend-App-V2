import { Component } from '@angular/core';
import {
  ELEMENT_DATA_BANOS,
  ELEMENT_DATA_CHEQUEOS,
  ELEMENT_DATA_VACUNAS,
} from '../../../shared/data/appointments';

@Component({
  selector: 'app-calendar-platform',
  templateUrl: './calendar-platform.component.html',
  styleUrl: './calendar-platform.component.css',
})
export class CalendarPlatformComponent {
  selectedCategory = 'chequeos';

  getAppointments() {
    if (this.selectedCategory === 'chequeos') {
      return ELEMENT_DATA_CHEQUEOS.map((item: any) => ({
        day: 'Wednesday',
        time: item.hora,
        name: 'Nombre y Apellido',
        icon: 'assets/img/calendar_date.png',
      }));
    } else if (this.selectedCategory === 'banos') {
      return ELEMENT_DATA_BANOS.map((item: any) => ({
        day: 'Wednesday',
        time: item.hora,
        name: 'Nombre y Apellido',
        icon: 'assets/img/calendar_date.png',
      }));
    } else {
      return ELEMENT_DATA_VACUNAS.map((item: any) => ({
        day: 'Wednesday',
        time: item.hora,
        name: 'Nombre y Apellido',
        icon: 'assets/img/calendar_date.png',
      }));
    }
  }
}
