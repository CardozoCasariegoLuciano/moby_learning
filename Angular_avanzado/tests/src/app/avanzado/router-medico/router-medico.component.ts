import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrls: ['./router-medico.component.css'],
})
export class RouterMedicoComponent implements OnInit {
  id!: string;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  guardarMedico() {
    this.router.navigate(['/medico', '123']);
  }
}
