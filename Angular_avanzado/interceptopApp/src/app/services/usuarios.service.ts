import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsers() {
    const params = new HttpParams().append('page', 1);

    return this.http
      .get<any>('https://reqreasdasds.in/api/user', { params })
      .pipe(
        map((resp) => { return resp['data']; }),
      );
  }
}
