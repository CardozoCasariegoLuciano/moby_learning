import { from, Observable, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

fdescribe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const service = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(service);
  });

  it('Init: debe cargar a los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(service, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBe(medicos.length);
  });

  it('Debe llamar al servidor para agregar un medico', () => {
    const espia = spyOn(service, 'agregarMedico').and.callFake((_medico) => {
      return new Observable();
    });
    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe agrgar un nuevo medico al arreglo de medicos', () => {
    const medico = { id: 1, nombre: 'Eduardo' };

    spyOn(service, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar al medico';
    spyOn(service, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servicio para eliminar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const borrarService = spyOn(service, 'borrarMedico');

    componente.borrarMedico('5');

    expect(borrarService).toHaveBeenCalledWith('5');
  });

  it('no debe de llamar al servicio para eliminar un medico si el confirm de false', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const borrarService = spyOn(service, 'borrarMedico');
    componente.borrarMedico('5');
    expect(borrarService).not.toHaveBeenCalledWith('5');
  });
});
