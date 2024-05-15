import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps-details',
  templateUrl: './google-maps-details.component.html',
  styleUrl: './google-maps-details.component.css'
})
export class GoogleMapsDetailsComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 8;


}
