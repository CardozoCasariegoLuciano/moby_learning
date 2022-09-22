import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Person } from 'src/app/models/person.model';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    component.person = new Person('', '', 0, 0, 0);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the name by "nombre"', () => {
    component.person = new Person('nombre', 'apellido', 30, 90, 1.2);
    expect(component.person.name).toBe('nombre');
  });

  it('should have a <h3> with "Hola, Valeria" content', () => {
    component.person = new Person('Valeria', 'apellido', 30, 90, 1.2);
    const personDebug: DebugElement = fixture.debugElement;
    const h3Debug: DebugElement = personDebug.query(By.css('h3'));
    const h3 = h3Debug.nativeElement;

    fixture.detectChanges();

    expect(h3.textContent).toBe(`Hola, ${component.person.name}`);
  });

  it('should have a <p> with a a weigth content', () => {
    component.person = new Person('Valeria', 'apellido', 30, 90, 1.2);
    const paragraph = fixture.debugElement.query(By.css('p')).nativeElement;
    fixture.detectChanges();

    expect(paragraph.textContent).toBe(
      `Tu peso es: ${component.person.weigth}`
    );
  });

  it('should have a <Button> with "mostrar" content', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.textContent).toBe('mostrar');
  });

  it('should imc variable toBe "" before the click', () => {
    expect(component.imc).toBeFalsy();
  });

  it('should have the imc after call calcIMC', () => {
    component.person = new Person('Valeria', 'apellido', 30, 70, 2.2);
    const status = fixture.debugElement.query(By.css('.status')).nativeElement;

    component.calcIMC();
    fixture.detectChanges();

    expect(component.imc).toBeTruthy();
    expect(status.textContent).toContain('Down');
  });

  it('should have the imc after click the button', () => {
    component.person = new Person('Valeria', 'apellido', 30, 70, 2.2);
    const buttonDebug = fixture.debugElement.query(By.css('button'));
    const status = fixture.debugElement.query(By.css('.status')).nativeElement;

    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.imc).toBeTruthy();
    expect(status.textContent).toContain('Down');
  });

  it('should raise select event when clicj the second button', () => {
    const expectedPerson = new Person('Valeria', 'apellido', 30, 70, 2.2);
    component.person = expectedPerson;
    const buttonDebug = fixture.debugElement.query(
      By.css('.btn-select-person')
    );

    let selectedPerson: Person | undefined;
    component.onSelected.subscribe((person) => {
      selectedPerson = person;
    });

    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(selectedPerson).toEqual(expectedPerson);
  });
});
