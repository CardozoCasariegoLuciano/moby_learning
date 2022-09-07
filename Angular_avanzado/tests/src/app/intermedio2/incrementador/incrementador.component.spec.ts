import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la layenda', () => {
    const text = 'Componente de carga';
    component.leyenda = text;

    fixture.detectChanges(); // Disparar la deteccion de cambios
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain(text);
  });

  it('Debe de mostrar el valor del progreso', () => {
    fixture.detectChanges(); // Disparar la deteccion de cambios
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('50');

    component.cambiarValor(5);
    fixture.detectChanges(); // Disparar la deteccion de cambios
    expect(elem.innerHTML).toContain('55');
  });

  it('Debe de mostrar en el input el valor del progreso', async () => {
    const initialValue = 60;
    component.progreso = initialValue;
    component.cambiarValor(5);

    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.query(By.css('input'));
    const elem: HTMLInputElement = input.nativeElement;

    expect(elem.value).toBe('65');
  });

  it('Debe incrementar/decrementar con un clic en el boton', () => {
    const botones = fixture.debugElement.queryAll(By.css('button.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });
});
