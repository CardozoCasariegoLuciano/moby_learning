import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlacesHttpClient extends HttpClient {
  public baseURL: string = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(
    url: string,
    options: {
      params?: HttpParams
        | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
          };
    }
  ) {
    url = this.baseURL + url;

    return super.get<T>(url, {
      params: {
        limit: 5,
        language: 'es',
        access_token: environment.mapboxToken,
        ...options.params
      },
    });
  }
}
