import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './app.component';
import {BadgeComponent } from './badge.component';
import {CardComponent } from './card.component';
import {CapitalisePipe} from './capitalise.pipe';
import {SearchCoursePipe} from './searchCourse.pipe'

@NgModule({
  imports:      [ BrowserModule ,HttpClientModule],
  declarations: [ AppComponent ,BadgeComponent,CardComponent,CapitalisePipe,SearchCoursePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
