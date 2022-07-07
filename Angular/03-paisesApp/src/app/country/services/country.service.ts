import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private URL: string = "https://restcountries.com/v3.1"

  constructor(private http:HttpClient) { }

  searchCountry(term: string) {
    const url = `${this.URL}/name/${term}`
    return this.http.get(url);
  }
}
