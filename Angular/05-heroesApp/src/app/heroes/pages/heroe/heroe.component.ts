import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private activeRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroeByID(id)))
      .subscribe((hero) => (this.heroe = hero));
  }

  //otra forma...
  volverAllistado() {
    this.route.navigate(["/heroes/listado"])
  }
}
