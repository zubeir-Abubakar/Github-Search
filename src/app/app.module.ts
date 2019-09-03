import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
