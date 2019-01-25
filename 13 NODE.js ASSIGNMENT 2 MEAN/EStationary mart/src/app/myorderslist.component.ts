import { Component ,OnInit,Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-signin',
  template: ` 
  
  <td><button type="button" class="btn btn-primary" (click)="goback()">Back to items</button></td><div class="row">
  
      <table class="table ">
      <thead class="thead-light">
      <tr>
          <th scope="col">Order ID</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Price</th>
          <th scope="col">Approved/cancelled</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let order of orders;let i=index"  >
  
      <td>{{order.order_id}}</td>
      <td>{{order.name}}</td>
      <td>{{order.number_of_items}}</td>
      <td>{{order.Total_price}}</td>
      <td>{{order.request}}</td>      
      </tr>
      </tbody>
      </table>
</div>`,
})

export class MyorderslistComponent {
  orders:Array <Object>=[];
  customer_name:string

  constructor(public http:HttpClient,private route: ActivatedRoute,
    private router: Router){
        this.customer_name = route.snapshot.params['name'];
  }
  
  ngOnInit(){
    
        this.http.get('http://localhost:8001/orderlist/')
        .toPromise()
        .then(res=>{
            console.log(res)
            this.orders=res as any;
        })
        
  }

  goback(){

    this.router.navigate(['Items/'+this.customer_name]);
     
 }
 
}