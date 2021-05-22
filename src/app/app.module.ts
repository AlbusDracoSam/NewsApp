import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusniessnewsComponent } from './busniessnews/busniessnews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusniessnewsComponent,
    SportsComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
