import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-signin',
  template: `
  {{order_id}} 
  is ordered by {{customer_name}}{{date}}

  <td><button type="button" class="btn btn-primary" (click)="goback()">Back to items</button></td>
  `
  ,
})

export class OrderComponent {
    order_id:number;
    date:number;
    customer_name:string;
    Quantity:number;
    Price:number;
  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
        this.order_id = route.snapshot.params['id'];
        this.date = route.snapshot.params['date'];
        this.customer_name = route.snapshot.params['name'];
        
  }
  
  ngOnInit(){
    /*this.http.get('http://localhost:8001/myorders/'+this.order_id)
    .toPromise()
    .then(res=>{
    console.log(res);
  
    })*/
  }
  
   goback(){
   this.http.delete('http://localhost:8001/deletecart/')
   .toPromise()
   .then(res=>{
    console.log(res)
    /*if(res.code==403)
    {
     this.mess=res.failure
 }
 else{*/
   this.router.navigate(['Items/'+this.customer_name]);
    return res
})

  
  }





}

