import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  constructor() {}

  public getValue(): string {
    return 'My value';
  }

  public getAsyncValue() {
    return Promise.resolve('Async value');
  }

  public getObservableValue() {
    return of('Observable value');
  }
}
