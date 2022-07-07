import { Component} from '@angular/core';
import {GifsService} from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{
  constructor(private gifService:GifsService){}

  get history(): string[] {
    return this.gifService.getHystory
  }

  reSearch(item: string) {
    this.gifService.searchGifs(item)
  }

}
