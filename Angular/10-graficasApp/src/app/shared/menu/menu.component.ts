import { Component } from '@angular/core';

interface Imenu {
  title: string;
  path: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor:pointer;
    } 
  `
  ]
})
export class MenuComponent  {
 
  menuList: Imenu[] = [
{
  title: "Barras",
  path: "graficas/barras"
},
{
  title: "Barras dobles",
  path: "graficas/barras-dobles"
},
{
  title: "Dona",
  path: "graficas/dona"
},
{
  title: "Donas Http",
  path: "graficas/dona-http"
},
  ]

}
