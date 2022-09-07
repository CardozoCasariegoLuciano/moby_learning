import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule], // si requiere de otros modulos
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la pagina de medicos', () => {
    const debugElemet = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );

    console.log(debugElemet);

    let existe = false;
    for (const route of debugElemet) {
      if (route.nativeNode.attributes.routerLink.value === '/medicos') {
        existe = true;
        break;
      }
    }

    expect(existe).toBeTruthy();
  });
});
