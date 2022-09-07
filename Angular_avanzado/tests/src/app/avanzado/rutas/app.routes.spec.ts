import {HospitalComponent} from 'src/app/intermedio2/hospital/hospital.component';
import { routes } from './app.routes';

describe('Rutas principales', () => {

  it('Debe existir la ruta /medicos/:id', () => {
    expect(routes).toContain({
      path: 'Hospital',
      component: HospitalComponent,
    });
  });
});
