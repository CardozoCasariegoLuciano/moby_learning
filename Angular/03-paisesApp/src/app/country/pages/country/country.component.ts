import { Component, Input } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CountryComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';
  isError: boolean = false;
  countries: RESTCountriesResponse[] = [];
  suggestedCountries: RESTCountriesResponse[] = [];
  @Input() placeholder: string = '';
  isSuggestion: boolean = false

  buscar(termino: string) {
    this.isSuggestion = false
    this.isError = false;
    this.termino = termino;

    if (this.termino.length === 0) return;

    this.countryService.searchCountry(this.termino).subscribe(
      (resp) => {
        this.countries = resp;
      },
      (error) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  showSuggestion(termino: string) {
    this.isSuggestion = true
    this.isError = false;
    this.termino = termino

    this.countryService
      .searchCountry(termino)
      .subscribe(
        (countries) => (this.suggestedCountries = countries.splice(0, 5)),
        (err) => this.suggestedCountries = []
      );
  }
}
