import { routing } from './app.routes';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  HeaderComponent,
          FooterComponent } from './components/index';

import { GitHubLayerService } from './services/github.layer.service';
import { CardListService } from './ui/card-list/card-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [ GitHubLayerService, CardListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
