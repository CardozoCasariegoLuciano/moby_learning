import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent   {

  constructor(private placeSevice: PlacesService) { }

  get isUserLocationReady(): boolean {
    return this.placeSevice.isUserLocationready
  }

}
