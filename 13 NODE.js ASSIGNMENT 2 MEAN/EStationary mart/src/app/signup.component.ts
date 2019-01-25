import { Component ,OnInit,Input,Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-signup',
  template: `<div class="container">
  <h1 class="text-center">New Registration</h1>
  <div class="row">
  
  <div class="input-group mb-3">
  <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Name</span>
  </div>
  <input type="text" id="name" #name (change)="0" class="form-control" placeholder="name" aria-label="empid" aria-describedby="basic-addon1">
  </div>
  </div>
  
  <div class="row">
  <div class="input-group mb-3">
      <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">PASSWORD</span>
      </div>
      <input type="password" id="password" #password (change)="0" class="form-control" placeholder="password" aria-label="name" aria-describedby="basic-addon1">
  </div>
  </div>
  <button type="button" class="btn btn-primary" name="submit" (click)="signup(name.value,password.value)">Signup</button>
  {{mess}}
  </div>`
  ,
})
export class SignupComponent {
    customers:Array <Object>=[];
    @Input('name') name:string=' ';
    @Input('password') password:string=' ';
   mess:string='';
    
    signup(name:string,password:string){
        
       this.http.post('http://localhost:8001/signup',
       {name:name,password:password})
       .toPromise()
       .then(res=>{
           console.log(res)
           if(res['code']==400){
               this.mess=res['failure']
           }
           else{
            this.router.navigate(['Signin']);}
        
           return res
      })
    }
    constructor(public http:HttpClient,private route: ActivatedRoute,
        private router: Router){
    
    }
    
    ngOnInit(){
    
    }
    


}

