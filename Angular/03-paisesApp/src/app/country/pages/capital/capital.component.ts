import { Component } from '@angular/core';
import { RESTCountriesResponse } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';
  isError: boolean = false;
  countries: RESTCountriesResponse[] = [];

  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;

    if (this.termino.length === 0) return;

    this.countryService.searchCapital(this.termino).subscribe(
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
    this.isError = false;
  }
}
