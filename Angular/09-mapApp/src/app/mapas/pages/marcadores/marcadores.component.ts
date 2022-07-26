import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface ImarkerColor {
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css'],
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMap!: ElementRef;
  mapa!: mapboxgl.Map;
  zoom: number = 17;
  center: [number, number] = [-58.2902354086446, -34.749027488060605];
  marcadores: ImarkerColor[] = [];

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center,
      zoom: this.zoom,
    });

    this.leerMarcadores();
  }

  agregarMarcador() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color: color,
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.marcadores.push({ color, marker: nuevoMarcador });
    this.guardarMarcadores();

    nuevoMarcador.on('dragend', () => {
      this.guardarMarcadores();
    });
  }

  irAlMarcador(marcador: ImarkerColor) {
    this.mapa.flyTo({
      center: marcador.marker!.getLngLat(),
    });
  }

  borrarMarcador(index: number) {
    this.marcadores[index].marker?.remove();
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    const lgnLatArray: ImarkerColor[] = [];

    this.marcadores.forEach((m) => {
      const { lng, lat } = m.marker!.getLngLat();

      lgnLatArray.push({ color: m.color, centro: [lng, lat] });
    });

    localStorage.setItem('marcadores', JSON.stringify(lgnLatArray));
  }

  leerMarcadores() {
    if (!localStorage.getItem('marcadores')) return;

    const marcadores: ImarkerColor[] = JSON.parse(
      localStorage.getItem('marcadores')!
    );

    marcadores.forEach((m) => {
      const nuevoMarcador = new mapboxgl.Marker({
        draggable: true,
        color: m.color,
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa);

      this.marcadores.push({ color: m.color, marker: nuevoMarcador });

      nuevoMarcador.on('dragend', () => {
        this.guardarMarcadores();
      });
    });
  }
}
