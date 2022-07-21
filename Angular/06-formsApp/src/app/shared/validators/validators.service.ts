import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public nyapPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() {}

  notYadk(arg : FormControl): ValidationErrors | null{
    const value: string = arg.value?.trim().toLowerCase()
    if(value === "yadk"){
      return {
          notYadk: true
      }
    }
    return null
  }

  camposIguales(str1 : string, str2: string){

    return ( (formGroup : AbstractControl): ValidationErrors | null => {
        
      const value1 = formGroup.get(str1)?.value;
      const value2 = formGroup.get(str2)?.value;

      if(value1 != value2){
        formGroup.get(str2)?.setErrors({noIguals: true})
        return {
          noIguals : true
        }
      }
      formGroup.get(str2)?.setErrors(null)
      return null
    })
  }


}
