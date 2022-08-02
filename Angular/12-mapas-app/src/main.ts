import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Mapboxgl from 'mapbox-gl';

 
Mapboxgl.accessToken = environment.mapboxToken;

if (environment.production) {
  enableProdMode();
}



if (!navigator.geolocation){
  alert("El navegador no soporta la geolocation")
  console.log('El navegador no soporta la geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
