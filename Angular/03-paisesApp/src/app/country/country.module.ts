import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { SingleCountryComponent } from './pages/single-country/single-country.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SingleCountryComponent,
    CountriesTableComponent,
    CountriesInputComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    SingleCountryComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
  ]
})
export class CountryModule { }
