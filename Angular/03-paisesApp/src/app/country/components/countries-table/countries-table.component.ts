import { Component, Input} from '@angular/core';
import {RESTCountriesResponse} from '../../interfaces/country.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
  ]
})
export class CountriesTableComponent {

  @Input()
  countries: RESTCountriesResponse[] = []
}
