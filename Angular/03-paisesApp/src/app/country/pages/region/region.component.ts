import { Component } from '@angular/core';
import {RESTCountriesResponse} from '../../interfaces/country.interface';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent {

  regions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  regionActive: string = ""
  countries: RESTCountriesResponse[] = []

  constructor(private countryService:CountryService) { }

  activeRegion(region: string) {
    if(this.regionActive === region) return

    this.regionActive = region;
    this.countries = []

    this.countryService.searchByRegion(region).subscribe(
      (resp) => this.countries = resp
    )
  }

  getCSSclasses(region: string) {
    return (region !== this.regionActive)
      ? "btn-outline-primary"
      : "btn-primary"
  }
}
