import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from '../../services/paises-service.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css'],
})
export class SelectorPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    fronteras: ['', [Validators.required]],
  });

  regiones: string[] = [];
  paises: PaisSmall[] = [];
  fronteras: string[] = [];
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private paisesService: PaisesServiceService
  ) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;

    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('pais')?.reset('');
          this.cargando = true;
        }),

        switchMap((region) => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe((paises) => {
        this.paises = paises;
        this.cargando = false;
      });

    this.myForm
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
          this.myForm.get('fronteras')?.reset('');
          this.cargando = true;
        }),
        switchMap((paisCod) => this.paisesService.getPaisPorCodigo(paisCod))
      )
      .subscribe((pais) => {
        this.fronteras = pais ? pais[0].borders : [];
        this.cargando = false;
      });
  }

  guardar() {
    console.log('guardando');
  }
}
