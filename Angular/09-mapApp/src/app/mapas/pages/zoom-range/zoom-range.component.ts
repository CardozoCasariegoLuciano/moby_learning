import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {


  @ViewChild("mapa") divMap!: ElementRef
  mapa!: mapboxgl.Map;
  zoom: number = 17;
  center: [number, number] =  [-58.2902354086446, -34.749027488060605]

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center,
      zoom: this.zoom
    });  

    this.mapa.on('zoom', () => {
      this.zoom = this.mapa.getZoom()
    })

    this.mapa.on('zoomend', () => {
      if(this.mapa.getZoom() >= 18){
        this.mapa.zoomTo(18)        
      }
    })

    this.mapa.on("move", (ev) => {
      const {lat, lng} = ev.target.getCenter()

      this.center = [lat, lng]
    })
  }

  ngOnDestroy(): void {
    this.mapa.off("zoom", () => {})
    this.mapa.off("zoomend", () => {})
    this.mapa.off("move", () => {})
   }

  zoomIn(){
    this.mapa.zoomIn()    
  }

  zoomOut(){
    this.mapa.zoomOut()    
  }

  zoomChange(valor: string){
    this.mapa.zoomTo(Number(valor))
  }  


}
