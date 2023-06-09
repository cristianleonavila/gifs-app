import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})

export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory:string[] = [];

  private _urlService = 'https://api.giphy.com/v1/gifs';

  private _apiKey: string = 'HyGa1XAXAaKIX48HCzy4Uq4oWGRVHZy3';

  constructor(
    private http:HttpClient
  ) {

    this.loadTags();
    this.loadLastSearch();
  }

  get apiKey():string {
    return this._apiKey;
  }

  get tags() {
    return [...this._tagsHistory];
  }

  public searchGif( tag: string ):void {

    if ( tag.trim() ) {
      this.normalizeHistory( tag );

      const params = new HttpParams()
        .set('api_key', this._apiKey)
        .set('q', tag)
        .set('limit', 10);

      this.http.get<SearchResponse>(`${this._urlService}/search`, { params })
        .subscribe( resp => {
          this.gifList = resp.data;
        });
    }
  }

  private normalizeHistory( tag: string ) {
    tag = tag.toLowerCase();
    if ( this._tagsHistory.includes( tag ) ) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag );
    }
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveTags();
    this.saveLastTag(tag);
  }

  private saveLastTag( tag:string ) {
    localStorage.setItem('__lastTag', JSON.stringify(tag));
  }

  private saveTags() {
    localStorage.setItem('__tags', JSON.stringify(this._tagsHistory));
  }

  private loadTags() {
    if ( !localStorage.getItem('__tags')) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('__tags')! );
  }

  private loadLastSearch() {
    if ( !localStorage.getItem('__lastTag') ) return;
    this.searchGif( JSON.parse(localStorage.getItem('__lastTag')!) );
  }
}
