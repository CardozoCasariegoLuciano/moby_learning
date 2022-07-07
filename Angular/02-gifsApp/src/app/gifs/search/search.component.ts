import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private gifService: GifsService) {}

  @ViewChild('txtBuscar') searchText!: ElementRef<HTMLInputElement>;
  buscar(): void {
    let text = this.searchText.nativeElement;

    if (text.value.length === 0) return;

    this.gifService.searchGifs(text.value);
    text.value = '';
  }
}
