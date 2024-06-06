import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  appointmentType: string,
  hora: string,
  dia: string
}
@Component({
  selector: 'app-modal-appointment',
  templateUrl: './modal-appointment.component.html',
  styleUrl: './modal-appointment.component.css'
})
export class ModalAppointmentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}
