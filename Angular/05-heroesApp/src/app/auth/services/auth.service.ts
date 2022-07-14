import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Iauth} from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = environment.baseURL
  private userLogued: Iauth | undefined

  constructor(private http: HttpClient) { }


  hasSessionActive(): Observable<boolean>{
    if (!localStorage.getItem("userID")) {
      return of(false)
    }

    return this.http.get<Iauth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        map(auth => { this.userLogued = auth;return true })
    )
  }

  get getUserLogued() {
    return {...this.userLogued}
  }

  logIn(): Observable<Iauth> {
    return this.http.get<Iauth>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(auth => this.userLogued = auth),
        tap(auth => localStorage.setItem("userID", auth.id)),
      )
  }
}
