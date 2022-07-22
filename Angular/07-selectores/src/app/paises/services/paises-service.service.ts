import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  private baseURL = "https://restcountries.com/v3"
  private _regiones: string[] = ["africa", "americas", "asia", "europe" , "oceania"]

  get regiones(): string[]{
    return [... this._regiones]
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]>{
    const url = `${this.baseURL}/region/${region}?fields=cca3,name`
    return this.http.get<PaisSmall[]>(url)
  }

  getPaisPorCodigo(codigo: string): Observable<Pais[] | null>{

    if(!codigo) return of(null);

    const url = `${this.baseURL}/alpha?codes=${codigo}`
    return this.http.get<Pais[]>(url)
  }

}
