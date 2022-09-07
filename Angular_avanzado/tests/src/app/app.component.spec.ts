import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('Medico Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])], // si requiere de otros modulos
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('Se debe mostrar el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El componente tiene que tener "app" como titulo', () => {
    expect(component.title).toBe('tests');
  });

  it('Debe de tener un router-outlet', () => {
    const debugElemet = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElemet).not.toBeNull();
  });

});
