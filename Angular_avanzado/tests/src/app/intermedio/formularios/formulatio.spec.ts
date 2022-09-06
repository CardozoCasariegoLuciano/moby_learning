import { FormBuilder } from '@angular/forms';
import { FormLogin } from './formulatio';

describe('Formularios', () => {
  let componente: FormLogin;

  beforeEach(() => {
    componente = new FormLogin(new FormBuilder());
  });

  it('Tiene que tener dos campos', () => {
    const hasEmailField = componente.form.contains('email');
    const hasPassworsField = componente.form.contains('password');

    expect(hasPassworsField).toBeTrue();
    expect(hasEmailField).toBeTrue();
  });

  it('El email tiene que ser obligatorio', () => {
    const emailControl = componente.form.get('email');

    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
  });

  it('El email tiene que ser uno valido', () => {
    const emailControl = componente.form.get('email');

    emailControl?.setValue('lucho@gmail.com');
    expect(emailControl?.valid).toBeTrue();

    emailControl?.setValue('lucho@');
    expect(emailControl?.valid).toBeFalse();
  });
});
