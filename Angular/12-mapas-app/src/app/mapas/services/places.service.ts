import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlacesHttpClient } from '../api/placesHttpClient';
import { Feature, PlacesResponse } from '../interfaces/places.interface';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];

  get isUserLocationready(): boolean {
    return !!this.userLocation;
  }

  constructor(private placesHttpClient: PlacesHttpClient, private mapService:  MapService) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (args) => {
          this.userLocation = [args.coords.longitude, args.coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se puedo acceder a la geolocation');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPLacesByQuery(query: string) {
    if (query.length === 0) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    this.isLoadingPlaces = true;
    this.placesHttpClient
      .get<PlacesResponse>(`/${query}.json`, {
        params: { proximity: this.userLocation!.join(',') },
      })
      .subscribe((resp) => {
        this.isLoadingPlaces = false;
        this.places = resp.features;
        this.mapService.createMarkersForPlaces(this.places, this.userLocation!)
      });
  }

  deletePlaces(){
    this.places = []
  }
}
