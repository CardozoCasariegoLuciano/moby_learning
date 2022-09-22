import { ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Person} from 'src/app/models/person.model';
import {PersonComponent} from '../person/person.component';

import { PeopleComponent } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleComponent, PersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 3 persons', () => {
    component.people = [
      new Person("Luciano", "Cardozo", 24, 70, 1.75),
      new Person("Lucas", "Loco", 30, 90, 1.75),
      new Person("Pollo", "Loco", 30, 90, 1.75),
    ]
    fixture.detectChanges()

    const debugElement = fixture.debugElement.queryAll(By.css('app-person'))

    expect(debugElement.length).toBe(component.people.length)
  });
});
