import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private _gifsService: GifsService
  ) {

  }

  public searchGif(tag:string) {
    this._gifsService.searchGif(tag);
  }

  get tags():string[] {
    return this._gifsService.tags;
  }
}
