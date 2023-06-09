import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(
    private _gifService: GifsService
  ) {

  }

  @ViewChild('txtBusquedaGifs')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchGif() {
    const newTag = this.tag.value;
    this._gifService.searchGif( newTag );
    this.tag.value = '';

  }

  get tag() {
    return this.tagInput.nativeElement;
  }


}
