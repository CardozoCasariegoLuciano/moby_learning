import {TestBed} from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    })

    service = TestBed.inject(ValueService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  it('should return a sync value', () => {
    expect(service.getValue()).toBe("My value") 
  });

  it('should return an async value', async() => {
    const value = await service.getAsyncValue()
    expect(value).toBe("Async value") 
  });

  it('should return an observable value', async() => {
    let value!: string

    service.getObservableValue().subscribe((resp) => {
      value = resp
    })

    expect(value).toBe("Observable value") 
  });
});
