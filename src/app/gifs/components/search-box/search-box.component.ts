import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtBusquedaGifs')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    console.log(this.tagInput.nativeElement.value);
  }

}
