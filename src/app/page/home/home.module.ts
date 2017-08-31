import { SearchModule } from './../../ui/search/search.module';
import { CardListModule } from './../../ui/card-list/card-list.module';
import { CommonModule } from '@angular/common';
import { MainComponent } from './../../components/index';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { routing } from './home.routing';

@NgModule({
  imports: [routing, CommonModule, SearchModule, CardListModule],
  declarations: [HomeComponent, MainComponent]
})
export class HomeModule {}
