import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchCoursesPipe } from './searchcourses.pipe';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee.component';
import { SearchEmployeePipe } from './searchemployee.pipe';

@NgModule({
  declarations: [
    AppComponent , BadgeComponent , CardComponent , EmployeeComponent ,
    CapitalizePipe , SearchCoursesPipe , SearchEmployeePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
