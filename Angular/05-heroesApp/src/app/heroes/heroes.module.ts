import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import {HeroesRoutingModule} from './heroes-routing.module';
import {MaterialModule} from '../material/material.module';
import { HeroeTargetaComponent } from './components/heroe-targeta/heroe-targeta.component';
import { HeroeImagenPipe } from './pipes/heroe-imagen.pipe';
import {FormsModule} from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTargetaComponent,
    HeroeImagenPipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HeroesModule { }
