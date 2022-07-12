import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {}

  buscar() {
    this.heroService
      .searchHeroes(this.termino)
      .subscribe((resp) => (this.heroes = resp));
  }

  selectOption(event: MatAutocompleteSelectedEvent) {
    const hero: Heroe | undefined = event.option.value;
    this.heroeSelected = undefined

    if (hero) {
      this.termino = hero.superhero;

      this.heroService
        .getHeroeByID(hero.id!)
        .subscribe((resp) => (this.heroeSelected = resp));
    }
  }
}
