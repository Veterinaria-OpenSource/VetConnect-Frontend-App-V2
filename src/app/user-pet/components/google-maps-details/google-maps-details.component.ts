import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-google-maps-details',
  templateUrl: './google-maps-details.component.html',
  styleUrls: ['./google-maps-details.component.css'],
})
export class GoogleMapsDetailsComponent implements AfterViewInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 16;

  height: string = '400px';
  width: string = '100%';

  center: google.maps.LatLngLiteral = { lat: this.lat, lng: this.lng };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
      this.renderer.setStyle(mapContainer, 'width', this.width);
      this.renderer.setStyle(mapContainer, 'height', this.height);
    }
  }
}
