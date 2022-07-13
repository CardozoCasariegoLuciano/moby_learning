import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    alt_img: '',
    characters: '',
    first_appearance: '',
  };

  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    //this.activatedRoute.params
    //.pipe( switchMap(({id}) => this.heroService.getHeroeByID(id)))
    //.subscribe((hero) => {
    //console.log(hero)
    //this.heroe = hero
    //})

    this.activatedRoute.params.subscribe(({ id }) => (this.heroe.id = id));

    if (this.heroe.id) {
      this.heroService
        .getHeroeByID(this.heroe.id)
        .subscribe((hero) => (this.heroe = hero));
    }
  }

  guardar() {
    if (this.heroe.superhero.length === 0) return;

    if (this.heroe.id) {
      this.heroService
        .updateHero(this.heroe, this.heroe.id)
        .subscribe((resp) => this.mostrarSnakbar('Registro actualizado'));
    } else {
      this.heroService
        .createHero(this.heroe)
        .subscribe((resp) => this.mostrarSnakbar('Registro creado'));
    }

    this.router.navigate(['/heroes/listado']);
  }

  eliminarHeroe() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '350px',
      data: { ...this.heroe },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.deleteHero(this.heroe.id!).subscribe();
        this.router.navigate(['/heroes/listado']);
      }
    });
  }

  mostrarSnakbar(msg: string) {
    this.snackBar.open(msg, 'Ok!', {
      duration: 2000,
    });
  }
}
