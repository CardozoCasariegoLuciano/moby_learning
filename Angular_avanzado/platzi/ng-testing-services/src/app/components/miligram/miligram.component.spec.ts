import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiligramComponent } from './miligram.component';

describe('MiligramComponent', () => {
  let component: MiligramComponent;
  let fixture: ComponentFixture<MiligramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiligramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiligramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
