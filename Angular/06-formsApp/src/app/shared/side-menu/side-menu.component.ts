import { Component } from '@angular/core';

interface ImenuItem{
  texto: string;
  ruta: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {

  templateMenus: ImenuItem[] = [
    {
      texto: "Basicos",
      ruta: "/template/basicos",
    },
    {
      texto: "Dinamicos",
      ruta: "/template/dinamicos",
    },
    {
      texto: "Switches",
      ruta: "/template/switches",
    },
  ]

    reactiveMenus: ImenuItem[] = [
    {
      texto: "Basicos",
      ruta: "/reactive/basicos",
    },
    {
      texto: "Dinamicos",
      ruta: "/reactive/dinamicos",
    },
    {
      texto: "Switches",
      ruta: "/reactive/switches",
    },
  ]
}
