import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-google-maps-details',
  templateUrl: './google-maps-details.component.html',
  styleUrl: './google-maps-details.component.css',
})
export class GoogleMapsDetailsComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16;

  height: string = '400px';
  width: string = '100%';

  center: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    const mapContainer =
      this.elRef.nativeElement.querySelector('.map-container');
    if (mapContainer) {
      mapContainer.style.width = '100%';
    }
  }
}
