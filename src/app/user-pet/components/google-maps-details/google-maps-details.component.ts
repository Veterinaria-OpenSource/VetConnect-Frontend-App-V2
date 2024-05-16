import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-google-maps-details',
  templateUrl: './google-maps-details.component.html',
  styleUrl: './google-maps-details.component.css'
})
export class GoogleMapsDetailsComponent {

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16;

  height: string = '400px';
  width: string = '100%';


  center: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };

  // lo di todo para hacerlo responsive
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 768) { // 768px is a common breakpoint for mobile devices
      this.width = '200px';
    } else {
      this.width = '400px';
    }
  }
  

}
