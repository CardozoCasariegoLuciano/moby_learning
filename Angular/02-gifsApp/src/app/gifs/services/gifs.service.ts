import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, IgifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {
    //forma A
    if (localStorage.getItem('historial')) {
      this._history = JSON.parse(localStorage.getItem('historial')!);
    }

    //forma B
    this.results = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  private _api_key: string = 'UcQag4cVl5a9WTkRs3hMN1gi0SRhJoxR';
  private URI = `https://api.giphy.com/v1/gifs`;

  public results: Gif[] = [];
  private _history: string[] = [];

  get getHystory(): string[] {
    return [...this._history];
  }

  searchGifs(query: string): void {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this._api_key)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<IgifsResponse>(`${this.URI}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.results));
      });
  }
}
