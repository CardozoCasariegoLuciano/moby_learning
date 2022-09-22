import { Injectable } from '@angular/core';
import {ValueService} from './value.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private valueservice: ValueService) { }

  getValue() {
    return `${this.valueservice.getValue()}`
  }
}
