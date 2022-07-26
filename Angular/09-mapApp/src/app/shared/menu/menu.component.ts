import { Component, OnInit } from '@angular/core';

interface Iroutes {
  title: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Iroutes[] = [
    {
      title: "full screen",
      path: "/full-screen",
    },
    {
      title: "marcadores",
      path: "/marcadores",
    },
    {
      title: "propiedades",
      path: "/propiedades",
    },
    {
      title: "zoom range",
      path: "/zoom-range",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
