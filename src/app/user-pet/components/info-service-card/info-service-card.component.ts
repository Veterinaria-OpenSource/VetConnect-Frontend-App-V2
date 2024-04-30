import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-info-service-card',
  templateUrl: './info-service-card.component.html',
  styleUrl: './info-service-card.component.css'
})
export class InfoServiceCardComponent {
  @Output() textInput = new EventEmitter<string>();
  @Input() infoText?:string ="";
  @Input() confirmButton:boolean= true;

  submitText(){
    this.textInput.emit(this.infoText)
  }
}
