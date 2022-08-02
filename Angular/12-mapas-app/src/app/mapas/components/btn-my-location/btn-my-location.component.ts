import { Component  } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent   {

  constructor(private mapService: MapService, private placeServce: PlacesService) { }

  goToMyLocation(){   
    const coord = this.placeServce.userLocation
    this.mapService.flyTo(coord!)
  }
}
