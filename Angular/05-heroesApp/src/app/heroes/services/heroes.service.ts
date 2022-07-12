import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Heroe} from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URI: string = environment.baseURL

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.URI + "/heroes")
  }

  getHeroeByID(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(this.URI + "/heroes/" + id)
  }

  searchHeroes(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.URI + "/heroes?q=" + term + "&_limit=4")
  }

}
