import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('map')
  mapDivElement!: ElementRef;

  constructor(private placeService: PlacesService, private mapService: MapService) { }

  ngAfterViewInit(): void {
    if (!this.placeService.userLocation) throw Error('No hay una ubicacion');

    const mapa = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placeService.userLocation,
      zoom: 14,
    });

    const popup = new Popup()
    .setHTML(`
      <h3>Aquí estoy</h3>
      <span>En este lugar del mundo</span>
    `);

    new Marker({ color: 'green' })
      .setLngLat(this.placeService.userLocation)
      .setPopup(popup)
      .addTo(mapa)

    this.mapService.setMap(mapa)
      
  }
}
