import { Component} from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  constructor(private  gifService:GifsService){}

  get getGifs() {
    return this.gifService.results
  }
}
