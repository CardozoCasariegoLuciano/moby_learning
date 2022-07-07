import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent {
  constructor(private countryService: CountryService) {}

  termino: string = '';

  buscar() {
    if (this.termino.length === 0) return;

    this.countryService.searchCountry(this.termino).subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
