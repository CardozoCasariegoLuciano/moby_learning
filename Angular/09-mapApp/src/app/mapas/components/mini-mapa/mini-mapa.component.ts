import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css'],
})
export class MiniMapaComponent implements AfterViewInit {
  @Input() center!: [number, number];
  @ViewChild('minimapa') divMap!: ElementRef;

  ngAfterViewInit(): void {   
    
    const mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement, 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 15,
      interactive: false,
    });

    new mapboxgl.Marker()
    .setLngLat(this.center)
    .addTo(mapa);
  }
}
