import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-signin',
  template: `<div class="container">
  <h1 class="text-center">Login!</h1>
  <div class="row">
  
  <div class="input-group mb-3">
  <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">Name</span>
  </div>
  <input type="text" #name id="name" (change)="0" class="form-control" placeholder="name" aria-label="empid" aria-describedby="basic-addon1">
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
  <button type="button" class="btn btn-primary" (click)="signin(name.value,password.value)">Signin</button>
  </div> 
  {{mess}}`
  ,
})

export class SigninComponent {
  customers:Array <Object>=[];
  @Input('name') name:string=' ';
  @Input('password') password:string=' ';
  mess:string='';
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
  
  }
  
  ngOnInit(){
  
  }
  
  signin(name:string,password:string){
 
   
   this.http.post('http://localhost:8001/signin',
   {name:name,password:password})
   .toPromise()
   .then(res=>{
       console.log(res)
       //var response=JSON.parse(res);
       if(res['code']==403)
       {
        this.mess=res['failure']
    }
    else{
      if (res['name']=='admin')
      {
        this.router.navigate(['Admin/'+res['name']]);
      }else{
     this.router.navigate(['Items/'+res['name']]);}
       return res
      }
  })
  
}
}