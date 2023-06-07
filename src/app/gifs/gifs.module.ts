import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { GifsCardListComponent } from './components/gifs-card-list/gifs-card-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchBoxComponent,
    GifsCardListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class GifsModule { }
