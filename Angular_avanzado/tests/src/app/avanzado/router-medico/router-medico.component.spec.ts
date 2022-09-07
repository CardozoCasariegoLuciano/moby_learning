import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  params: Observable<any> = from([{ id: 'nuevo' }]);
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar a medico cuando se guarde', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['/medico', '123']);
  });

  it('Debe de settear el ID a nuevo', () => {
    expect(component.id).toBe('nuevo');
  });
});
