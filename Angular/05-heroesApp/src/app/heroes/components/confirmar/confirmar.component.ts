import {DialogRef} from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Heroe} from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef: DialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe,) { }

  ngOnInit(): void {
  }

  //borrar(): void {
    //this.dialogRef.close(true)
  //}

  cancelar() {
    this.dialogRef.close()
  }

}
