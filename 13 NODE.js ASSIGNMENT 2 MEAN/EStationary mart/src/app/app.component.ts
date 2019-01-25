import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<div class="container">
 <h1 class="text-center">E-StationaryMart</h1> 
 <ul class="nav nav-pills">
  <li role="presentation" class="active"><a [routerLink]="['/Signin']"> <button class="btn" > Signin </button></a></li>
  <li role="presentation" class="active"> <a [routerLink]="['/Signup']"> <button class="btn" > Signup </button></a></li>
  <li role="presentation" class="active"><button type="button" class="btn btn-primary" (click)="logout()">logout</button></li>
</ul>

 <br/><br/> 

 <router-outlet></router-outlet>

  </div>`,
})
export class AppComponent {
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
  
  }
  logout()
  {
     this.router.navigate(['Signin']); 
  }

}