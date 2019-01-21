import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent }  from './components/app.component';
import {SearchEmployeePipe} from './pipes/searchemployee.pipe'
import { EmployeeService } from './services/employee.service';
import {RouterModule,Routes} from '@angular/router';
import {EditComponent} from './components/edit.component';
import {ColorComponent} from './components/color.component';

const appRoutes:Routes =
[
  {
    path:'Edit', component: EditComponent
  }
];

@NgModule({
  imports:      [ BrowserModule ,HttpClientModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent ,SearchEmployeePipe,EditComponent,ColorComponent],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
