import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RESTCountriesResponse} from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }

  searchCountry(term: string)  :Observable<RESTCountriesResponse[]> {
    const url = `${this.URL}/name/${term}`
    return this.http.get<RESTCountriesResponse[]>(url);
  }
}
