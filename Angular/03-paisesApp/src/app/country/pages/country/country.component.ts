import { Component } from '@angular/core';
import {RESTCountriesResponse} from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';
  isError: boolean = false;
  countries: RESTCountriesResponse[] = []

  buscar() {
    this.isError = false;
    if (this.termino.length === 0) return;

    this.countryService.searchCountry(this.termino).subscribe(
      (resp) => {
        this.countries = resp
      },
      (error) => {
        this.isError = true;
        this.countries = []
      }
    );

  }
}
