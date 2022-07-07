import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    GifsListComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
