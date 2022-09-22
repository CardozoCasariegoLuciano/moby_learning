import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService!: MasterService;
  let valueServiceSpy!: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj("ValueService", ["getValue"])

    TestBed.configureTestingModule({
      providers: [
        MasterService,
        { provide: ValueService, useValue: spy },
      ],
    });

    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>
  });

  it('should call the method', () => {
    masterService.getValue();
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1);
  });
});
