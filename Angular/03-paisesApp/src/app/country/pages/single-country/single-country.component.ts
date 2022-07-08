import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import {RESTCountriesResponse} from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styles: [],
})
export class SingleCountryComponent implements OnInit {

  country!: RESTCountriesResponse

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.countryService.getCountryByCod(id)),
      )
      .subscribe( (resp) => this.country = resp[0]) 
  }
}
