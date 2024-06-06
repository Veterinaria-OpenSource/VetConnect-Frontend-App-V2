import { Component, Input, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addDays, format, startOfWeek } from 'date-fns';
import {
  ELEMENT_DATA_BANOS,
  ELEMENT_DATA_CHEQUEOS,
  ELEMENT_DATA_VACUNAS,
} from '../../../shared/data/appointments';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  @Input() selectedCategory: string = '';
  dataSource: any[] = [];
  weekDates: string[] = this.generateWeekDates();

  displayedColumns: string[] = [
    'hora',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ];

  constructor(private snackBar: MatSnackBar) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      this.dataSource = this.getDataSource();
    }
  }

  getDataSource() {
    if (this.selectedCategory === 'chequeos') {
      return ELEMENT_DATA_CHEQUEOS;
    } else if (this.selectedCategory === 'banos') {
      return ELEMENT_DATA_BANOS;
    } else {
      return ELEMENT_DATA_VACUNAS;
    }
  }

  generateWeekDates(): string[] {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, i) => format(addDays(start, i), 'dd'));
  }

  scheduleAppointment(element: any, day: string, dayIndex: number) {
    let appointmentType = '';
    switch (this.selectedCategory) {
      case 'chequeos':
        appointmentType = 'Chequeo';
        break;
      case 'banos':
        appointmentType = 'Baño';
        break;
      case 'vacunas':
        appointmentType = 'Vacuna';
        break;
      default:
        appointmentType = 'Cita';
    }
    const date = this.weekDates[dayIndex];
    this.snackBar.open(
      `Agendado: ${appointmentType} a las ${element.hora} el ${day} (${date})`,
      'Cerrar',
      {
        duration: 2000,
      }
    );
  }
}
