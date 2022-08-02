import { Component,  } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { MapService } from '../../services/map.service';
import { Feature } from '../../interfaces/places.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent   {

  constructor(private placeService: PlacesService, private mapService: MapService) { }

  get isLoading(){
    return this.placeService.isLoadingPlaces
  }

  get places(){
    return this.placeService.places
  }

  flyTo(place: Feature){
    const [lng, lat] = place.center
    this.mapService.flyTo([lng, lat])
  }

  getDirections(place: Feature){
    const start: [number, number] = this.placeService.userLocation!
    const [lng, lat] = place.center
    this.mapService.getRoutebetweenMarkers(start, [lng, lat]) 

    this.placeService.deletePlaces()
  }



}
