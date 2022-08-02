import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/places.interface';
import { DirectionAPIClient } from '../api/directionsAPIClient';
import { Directions, Route } from '../interfaces/directions.interface';
import { ignoreElements } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  private markers: Marker[] = [];

  constructor(private directionsAPI: DirectionAPIClient) {}

  isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coord: LngLatLike) {
    if (!this.isMapReady) throw Error('El mapa no esta listo');

    this.map?.flyTo({
      center: coord,
      zoom: 14,
    });
  }

  createMarkersForPlaces(places: Feature[], userLocation: [number, number]) {
    if (!this.map) throw Error('El mapa no esta listo');
    this.markers.forEach((m) => m.remove());

    const newMarkersList = [];

    for (const place of places) {
      const [lng, lat] = place.center;

      const popup = new Popup().setHTML(`
        <h6>${place.text_es}</h6>
        <span>${place.place_name}</span>
      `);

      const mark = new Marker()
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(this.map);

      newMarkersList.push(mark);
    }

    this.markers = newMarkersList;

    if (places.length === 0) return;

    const bounds = new LngLatBounds();
    bounds.extend(userLocation);
    this.markers.forEach((m) => bounds.extend(m.getLngLat()));

    this.map.fitBounds(bounds, {
      padding: 50,
    });
  }

  getRoutebetweenMarkers(start: [number, number], end: [number, number]) {
    this.directionsAPI.get<Directions>(`/${start.join(',')};${end.join(',')}`)
    .subscribe(resp =>this.drawPolyline(resp.routes[0]))
  }

  private drawPolyline(route: Route){
    console.log({kms: route.distance / 1000, duration: route.duration / 60});

    const bounds = new LngLatBounds()
    const coords = route.geometry.coordinates

    coords.forEach(([lng, lat]) => {
      bounds.extend([lng,lat])
    })

    this.map!.fitBounds(bounds, {
      padding: 50,
    });

    const sourceData: AnySourceData = {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry:{
              type: 'LineString',
              coordinates: coords
            }
          }
        ]
      }
    }

    if(this.map!.getLayer("RouteString")){
      this.map!.removeLayer("RouteString")
      this.map!.removeSource("RouteString")
    }

    this.map!.addSource("RouteString", sourceData)

    this.map?.addLayer({
      id:"RouteString",
      type: "line",
      source: "RouteString",
      layout: {
        "line-cap": "round",
        "line-join" : "round",
      },
      paint: {
        "line-color": "black",
        "line-width": 3
      }
    })



  }
}
