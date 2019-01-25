import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent }  from './app.component';
import { FirstComponent }  from './first.component';
import { SigninComponent }  from './signin.component';
import { SignupComponent }  from './signup.component';
import { ItemComponent }  from './items.component';
import { OrderComponent }  from './order.component';
import { MyorderslistComponent }  from './myorderslist.component';
import { AdminComponent }  from './admin.component';
import { AllordersComponent }  from './allorders.component';

const appRoutes:Routes =
[
  {
    path:'',component:FirstComponent
  },
  {
    path:'Signin',component:SigninComponent
  },
  {
    path:'Signup',component:SignupComponent
  },
  {
    path:'Items/:name',component:ItemComponent
  },
  {
    path:'Order/:name/:id/:date',component:OrderComponent
  },
  {
    path:'Myorders/:name',component:MyorderslistComponent
  },
  {
    path:'Allorders/:name',component:AllordersComponent
  },
  {
    path:'Admin/:name',component:AdminComponent
  }
 
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,MyorderslistComponent,FirstComponent,SigninComponent ,SignupComponent,ItemComponent,OrderComponent,AdminComponent,AllordersComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
