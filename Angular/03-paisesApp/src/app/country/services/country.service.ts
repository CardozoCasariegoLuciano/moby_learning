import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RESTCountriesResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private URL: string = 'https://restcountries.com/v3.1';
  get httpParams() {
    return new HttpParams().set('fields', 'name,cca2,flags,population');
  }

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.URL}/name/${term}`;
    return this.http.get<RESTCountriesResponse[]>(url, {
      params: this.httpParams,
    });
  }

  searchCapital(term: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.URL}/capital/${term}`;
    return this.http.get<RESTCountriesResponse[]>(url, {
      params: this.httpParams,
    });
  }

  getCountryByCod(id: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.URL}/alpha/${id}`;
    return this.http.get<RESTCountriesResponse[]>(url);
  }

  searchByRegion(region: string): Observable<RESTCountriesResponse[]> {
    const url = `${this.URL}/region/${region}`;
    return this.http.get<RESTCountriesResponse[]>(url, {
      params: this.httpParams,
    });
  }
}
