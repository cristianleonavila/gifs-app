import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gifs-card-list',
  templateUrl: './gifs-card-list.component.html',
  styleUrls: ['./gifs-card-list.component.css']
})
export class GifsCardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
