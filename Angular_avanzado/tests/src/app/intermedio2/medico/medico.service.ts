import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http : HttpClient) { }

  getMEdicos() {
    return this.http.get("...")
  }
}
