import { CardListService } from './ui/card-list/card-list.service';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  HeaderComponent,
          MainComponent,
          FooterComponent } from './components/index';
  
import { SearchModule } from './ui/search/search.module';
import { CardListModule } from './ui/card-list/card-list.module';
import { GitHubLayerService } from './services/github.layer.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,

    SearchModule,
    CardListModule
  ],
  providers: [ GitHubLayerService, CardListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
