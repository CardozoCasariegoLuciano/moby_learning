import {HttpClientModule} from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import {MedicoService} from './medico.service';

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService], //si el componente usa algun servicio
      imports: [HttpClientModule], // si requiere de otros modulos
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar un saludo', () => {
    const nombre = 'Pepe';
    const mensaje = component.saludarMEdico(nombre);

    expect(mensaje).toContain(nombre);
  });
});
