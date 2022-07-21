import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        null,
        [Validators.required, Validators.pattern(this.validations.nyapPattern)],
      ],
      username: [null, [Validators.required, this.validations.notYadk]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(this.validations.emailPattern),
        ],
        [
          this.emailValidation
        ]
      ],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    },
    {
      validators: [
        this.validations.camposIguales('password', 'confirmPassword'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validations: ValidatorsService,
    private emailValidation: EmailValidatorService,
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'luciano Cardozo',
      email: 'lucianoc.c117@gmail.com',
      username: 'noEsYadk',
      password: "123123",
      confirmPassword: "123123",
    });
  }

  isValidField(name: string) {
    return (
      this.miFormulario.controls[name].errors &&
      this.miFormulario.controls[name].touched
    );
  }

  enviarFormulario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  get emailerror(){
    let error: string = ""
    const email = this.miFormulario.get("email")

    if(email?.hasError('required')) {
      error = "Se espera un email valido"
    }
    if(email?.hasError('pattern')) {
      error = "Se espera que el mail cumpla un formato valido"
    }
    if(email?.hasError('emailTomado')) {
      error = "El email ya ha sido tomado"
    }

    return error    
  }
}
